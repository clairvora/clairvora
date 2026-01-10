# Database Architecture

This document covers database setup, ORM usage, and critical constraints for Cloudflare D1.

## Technology Choice: Drizzle ORM

After evaluating options (Drizzle, Kysely, raw SQL, Prisma), we chose **Drizzle ORM** for this project.

### Why Drizzle

| Factor | Decision Driver |
|--------|-----------------|
| **Type safety** | Full TypeScript inference on queries prevents runtime errors |
| **SQL injection protection** | Parameterized queries by default—hard to make mistakes |
| **Migration management** | Generates migrations from schema changes, handles SQLite's `ALTER TABLE` limitations |
| **Schema as code** | Single source of truth, self-documenting, version controlled |
| **D1 support** | First-class support via `drizzle-orm/d1` |

### Alternatives Considered

**Raw D1 with typed helpers**
- Pros: Zero dependencies, full control, easier to audit
- Cons: SQL injection possible with string interpolation, manual migration management, types drift from schema
- Verdict: Viable for small projects, but too risky at our complexity level

**Kysely**
- Pros: Type-safe query builder, lighter than Drizzle
- Cons: Less D1 documentation, smaller ecosystem, still need migration tooling
- Verdict: Good option, but Drizzle's schema-as-code is more valuable for this project

**Prisma**
- Pros: Best DX, largest community
- Cons: Poor D1 support, edge runtime issues, explicitly notes transaction limitations on D1
- Verdict: Not suitable for D1/edge deployment

### Hybrid Approach for Critical Paths

We use Drizzle for 90% of queries, but **explicit raw SQL for financial operations**:

```typescript
// Drizzle for general queries
const user = await db.query.users.findFirst({
  where: eq(users.id, userId)
});

// Raw SQL for wallet operations (auditable, explicit)
const result = await db.run(
  sql`UPDATE wallets SET balance = balance - ${amount} WHERE user_id = ${userId} AND balance >= ${amount}`
);
if (result.rowsAffected === 0) {
  throw new Error('Insufficient balance');
}
```

This keeps critical payment logic explicit and auditable rather than hidden behind ORM abstractions.

---

## D1-Specific Constraints

These constraints significantly impact how we design the database and application logic.

### 1. Transaction Model (Critical)

**D1 does NOT support traditional transactions.** You cannot:
- Open a transaction
- Read data
- Run application logic
- Write data
- Commit/rollback

D1 supports **atomic batched statements** via `db.batch([...])`. All statements execute as a single transaction and rollback if any fails—but statements cannot depend on values returned by previous statements in the batch.

#### Impact on Wallet/Payment Operations

```typescript
// WRONG: Race condition - another request could modify balance between read and write
const wallet = await db.query.wallets.findFirst({ where: eq(wallets.userId, id) });
if (wallet.balance >= amount) {
  await db.update(wallets).set({ balance: wallet.balance - amount }).where(eq(wallets.userId, id));
}

// CORRECT: Single atomic statement with constraint
const result = await db.run(
  sql`UPDATE wallets SET balance = balance - ${amount} WHERE user_id = ${userId} AND balance >= ${amount}`
);
if (result.rowsAffected === 0) {
  throw new InsufficientBalanceError();
}
```

#### Design Patterns for D1

1. **Single-statement updates with constraints** - Put invariants in SQL, check affected rows
2. **Append-only ledger** - For financial data, insert transaction rows and derive balances
3. **Optimistic concurrency** - Use version columns and retry on conflict

### 2. Read-After-Write Consistency

D1 uses read replication for performance. After a write, subsequent reads might hit a stale replica.

**Use D1 Sessions API for consistency-critical reads:**

```typescript
// After creating a payment, ensure next read sees it
const session = db.withSession();
await session.insert(payments).values({ ... });
const payment = await session.query.payments.findFirst({ ... }); // Guaranteed to see the insert
```

**When to use sessions:**
- After wallet transactions, before showing balance
- After starting a reading, before loading reading state
- After payment creation, before confirmation display

### 3. Foreign Key Enforcement

D1 enforces foreign keys by default (`PRAGMA foreign_keys = ON`).

**Migration considerations:**
- Table rebuilds (common in SQLite migrations) can fail due to FK constraints
- Use `PRAGMA defer_foreign_keys = true` for complex migrations, not `foreign_keys = OFF`
- Always test migrations on a staging D1 database first

### 4. D1 Limits

| Limit | Value | Implication |
|-------|-------|-------------|
| Max database size | 10 GB | Store media in R2, not D1 |
| Max bound parameters | 100 per query | Paginate large IN clauses |
| Max query duration | 30 seconds | Index hot paths, paginate results |
| Max batch statements | 1000 | Chunk large batch operations |

---

## Project Structure

```
src/lib/server/db/
├── index.ts              # getDb() helper, exports db client
├── schema/
│   ├── index.ts          # Re-exports all tables
│   ├── users.ts          # Users, profiles
│   ├── advisors.ts       # Advisor-specific tables
│   ├── readings.ts       # Readings, messages
│   ├── payments.ts       # Transactions, wallets
│   └── reviews.ts        # Reviews, ratings
└── migrations/           # Generated SQL migrations
```

### Database Client Pattern

```typescript
// src/lib/server/db/index.ts
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export function getDb(d1: D1Database) {
  return drizzle(d1, { schema });
}

export type Database = ReturnType<typeof getDb>;
```

### Usage in Routes

```typescript
// src/routes/api/users/+server.ts
import { getDb } from '$lib/server/db';
import { users } from '$lib/server/db/schema';

export async function GET({ platform }) {
  const db = getDb(platform.env.DB);
  const allUsers = await db.query.users.findMany();
  return Response.json(allUsers);
}
```

---

## Migration Workflow

### Generate Migration

```bash
npx drizzle-kit generate
```

This creates a SQL file in `src/lib/server/db/migrations/` based on schema changes.

### Review Migration

Always review generated SQL before applying. Watch for:
- Table rebuilds that might conflict with FK constraints
- Data loss from column drops
- Index changes on large tables

### Apply Migration

```bash
# Local development
npx wrangler d1 migrations apply clairvora-db --local

# Staging
npx wrangler d1 migrations apply clairvora-db --env staging

# Production (creates automatic backup)
npx wrangler d1 migrations apply clairvora-db --env production
```

### Drizzle Kit Config

```typescript
// drizzle.config.ts
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/server/db/schema/index.ts',
  out: './src/lib/server/db/migrations',
  dialect: 'sqlite',
} satisfies Config;
```

---

## Security Considerations

### Authorization (Critical)

D1 has no row-level security. Authorization is entirely application responsibility.

**Every query must enforce access control:**

```typescript
// WRONG: No authorization check
const readings = await db.query.readings.findMany({
  where: eq(readings.id, readingId)
});

// CORRECT: Scoped to authenticated user
const readings = await db.query.readings.findMany({
  where: and(
    eq(readings.id, readingId),
    or(
      eq(readings.clientId, session.userId),
      eq(readings.advisorId, session.userId)
    )
  )
});
```

### Sensitive Data

| Data Type | Storage Rule |
|-----------|--------------|
| Payment tokens | Never store raw card data; Authorize.Net handles PCI |
| Reading transcripts | Encrypt at rest if containing sensitive content |
| User PII | Minimize collection, encrypt sensitive fields |
| Auth credentials | Handled by Clerk, never stored in D1 |

### Logging

Never log:
- Payment tokens or transaction keys
- Full reading/chat transcripts
- User passwords or auth tokens
- Sensitive PII (SSN, full DOB, etc.)

---

## Financial Data Patterns

### Ledger-Style Wallet

Instead of mutable balance, use append-only transactions:

```typescript
// Schema
export const walletTransactions = sqliteTable('wallet_transactions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => users.id),
  amount: integer('amount').notNull(), // Cents, positive=credit, negative=debit
  type: text('type').notNull(), // 'deposit', 'reading_charge', 'refund', etc.
  referenceId: integer('reference_id'), // Reading ID, payment ID, etc.
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});

// Derive balance
const balance = await db
  .select({ total: sql<number>`SUM(amount)` })
  .from(walletTransactions)
  .where(eq(walletTransactions.userId, userId));
```

### Per-Minute Billing

For live readings charged per minute:

```typescript
// Atomic charge with balance check
const chargeResult = await db.run(sql`
  INSERT INTO wallet_transactions (user_id, amount, type, reference_id, created_at)
  SELECT ${userId}, ${-chargeAmount}, 'reading_charge', ${readingId}, ${Date.now()}
  WHERE (
    SELECT COALESCE(SUM(amount), 0) FROM wallet_transactions WHERE user_id = ${userId}
  ) >= ${chargeAmount}
`);

if (chargeResult.rowsAffected === 0) {
  // Insufficient balance - end reading
}
```

---

## References

- [Drizzle ORM D1 Documentation](https://orm.drizzle.team/docs/connect-cloudflare-d1)
- [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)
- [D1 Migrations Guide](https://developers.cloudflare.com/d1/reference/migrations/)
- [D1 Batch API (Transactions)](https://developers.cloudflare.com/d1/worker-api/d1-database/)
- [D1 Sessions API](https://developers.cloudflare.com/d1/worker-api/d1-database/#sessions)
- [D1 Limits](https://developers.cloudflare.com/d1/platform/limits/)
