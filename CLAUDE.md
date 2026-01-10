# CLAUDE.md - Clairvora Main App

## Project Overview

Clairvora is a psychic reading marketplace connecting clients with advisors. This is the main SvelteKit application handling:
- Public pages (homepage, advisor directory, about pages)
- Client dashboard (readings, wallet, favorites, settings)
- Advisor dashboard (profile, schedule, earnings, clients)
- Payments (Authorize.Net)
- Text/email readings (Twilio SMS, SendGrid email)

## Tech Stack

- **Framework:** SvelteKit with TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Cloudflare D1 (SQLite)
- **Auth:** Clerk
- **Hosting:** Cloudflare Pages
- **Payments:** Authorize.Net
- **Email:** SendGrid
- **SMS:** Twilio

## Related Services

This app works with three other Cloudflare Workers services:

| Service | Repo | Purpose |
|---------|------|---------|
| Chat | `clairvora-chat` | Real-time WebSocket chat readings |
| Phone | `clairvora-phone` | Twilio voice/video call readings |
| Admin | `clairvora-admin` | Internal admin dashboard |

All services share the same D1 database and Clerk auth.

## Reference Code

The legacy PHP codebase is at `/Users/softdev/Sites/clairvora-legacy/`. Use it to understand existing business logic, database schema, and feature requirements.

### Screenshots
Full-page screenshots of the current live site are at `reference/screenshots/` for design reference.

### Key Files

| File | Purpose |
|------|---------|
| `_includes/functions_PAYMENTS.php` | Payment processing logic |
| `_includes/functions_READINGS.php` | Reading lifecycle |
| `_includes/functions_CLIENTS.php` | Client operations |
| `_includes/functions_ADVISORS.php` | Advisor operations |
| `httpdocs/account/client/` | Client dashboard pages |
| `httpdocs/account/advisor/` | Advisor dashboard pages |

## Project Structure

```
src/
├── routes/
│   ├── (public)/           # Homepage, directory, about pages
│   ├── (auth)/             # Sign in, sign up (Clerk)
│   ├── account/
│   │   ├── client/         # Client dashboard
│   │   └── advisor/        # Advisor dashboard
│   ├── readings/           # Reading interfaces
│   └── api/                # API endpoints
├── lib/
│   ├── server/             # Server-only code (db, auth)
│   └── components/         # Shared UI components
└── app.css                 # Tailwind entry point
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Design System

See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for complete UI/UX guidelines including:
- Brand colors and gradients
- Typography scale
- Component patterns (buttons, cards, avatars)
- Section layouts and responsive breakpoints
- Animation and transition specs

## Database

See [DATABASE.md](DATABASE.md) for database architecture including:
- Why we chose Drizzle ORM (vs Kysely, raw SQL, Prisma)
- D1 transaction model constraints (critical for payments)
- Read-after-write consistency with D1 Sessions API
- Ledger-style patterns for wallet/financial data
- Migration workflow and security considerations

## Conventions

- Use Svelte 5 runes (`$state`, `$derived`, `$effect`)
- Server-side data loading via `+page.server.ts`
- Form handling via SvelteKit form actions
- Type-safe database queries with Drizzle ORM (when added)
- All API routes return JSON with consistent error structure
- Follow design system for all UI work

## Authentication (Clerk)

Authentication is handled by [Clerk](https://clerk.com) via `clerk-sveltekit` package.

### Sign-in Methods Enabled
- Email/Password
- Google OAuth
- Facebook OAuth
- Apple OAuth

### Architecture

```
src/
├── hooks.server.ts      # handleClerk() middleware - validates sessions on every request
├── hooks.client.ts      # initializeClerkClient() - client-side initialization
└── routes/
    ├── login/+page.svelte   # Custom sign-in page with Clerk SignIn component
    └── signup/+page.svelte  # Custom sign-up page with Clerk SignUp component
```

### Key Files

**hooks.server.ts** - Server middleware
```typescript
import { handleClerk } from 'clerk-sveltekit/server';
import { CLERK_SECRET_KEY } from '$env/static/private';

export const handle = handleClerk(CLERK_SECRET_KEY, {
  signInUrl: '/login'
});
```

**hooks.client.ts** - Client initialization
```typescript
import { initializeClerkClient } from 'clerk-sveltekit/client';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';

initializeClerkClient(PUBLIC_CLERK_PUBLISHABLE_KEY, {
  afterSignInUrl: '/account/client',
  afterSignUpUrl: '/account/client',
  signInUrl: '/login',
  signUpUrl: '/signup'
});
```

### Component Import Pattern

```typescript
// Correct - default imports from specific paths
import SignIn from 'clerk-sveltekit/client/SignIn.svelte';
import SignUp from 'clerk-sveltekit/client/SignUp.svelte';

// Wrong - will fail
import { SignIn } from 'clerk-sveltekit/client';
```

### Custom Styling

Clerk components are styled via `:global()` CSS selectors:

| Selector | Purpose |
|----------|---------|
| `.cl-formButtonPrimary` | Primary button (uses brand gradient) |
| `.cl-socialButtonsBlockButton` | OAuth buttons |
| `.cl-formFieldInput` | Input fields (12px border radius) |
| `.cl-footerActionLink` | Link styling (brand magenta) |
| `.cl-internal-b3fm6y` | "Secured by Clerk" badge |
| `.cl-headerTitle`, `.cl-headerSubtitle` | Hidden (we show our own headers) |
| `.cl-card`, `.cl-main`, `.cl-form` | Container resets (transparent, no padding) |

### Protected Route Pattern

```typescript
// src/routes/account/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  if (!locals.session) {
    throw redirect(302, '/login');
  }
  return { user: locals.session.user };
};
```

### Clerk Dashboard

Manage users, sessions, OAuth providers: https://dashboard.clerk.com

## Environment Variables

Set via Cloudflare dashboard or `wrangler secret`:
- `PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk client key (safe for frontend)
- `CLERK_SECRET_KEY` - Clerk server key (keep secret)
- `AUTHORIZE_NET_API_LOGIN` - Payment processing
- `AUTHORIZE_NET_TRANSACTION_KEY` - Payment processing
- `SENDGRID_API_KEY` - Email delivery
- `TWILIO_ACCOUNT_SID` - SMS
- `TWILIO_AUTH_TOKEN` - SMS
