import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients, admins } from './users';
import { readings } from './readings';

// Transaction types
export const TRANSACTION_TYPE = {
	READING: 'reading',
	WITHDRAWAL: 'withdrawal',
	DEPOSIT: 'deposit',
	PAYMENT: 'payment',
	REFUND: 'refund',
	BONUS: 'bonus'
} as const;

// Account types
export const ACCOUNT_TYPE = {
	CLIENT: 1,
	ADVISOR: 2,
	PLATFORM: 3
} as const;

// Payment card types
export const CARD_TYPE = {
	GENERIC: 0,
	AMEX: 1,
	MASTERCARD: 2,
	DISCOVER: 3,
	VISA: 4
} as const;

// Saved payment methods (credit cards via Authorize.Net)
export const paymentMethods = sqliteTable('payment_methods', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Status: 0=inactive, 1=active
	status: integer('status').notNull().default(1),

	clientId: integer('client_id')
		.notNull()
		.references(() => clients.id, { onDelete: 'cascade' }),

	// Billing info
	firstName: text('first_name'),
	lastName: text('last_name'),
	company: text('company'),
	address: text('address'),
	city: text('city'),
	state: text('state'),
	zip: text('zip'),
	country: text('country').default('USA'),

	// Card info (tokenized - never store full card numbers)
	lastFour: text('last_four').notNull(),
	expirationDate: text('expiration_date'), // MM/YY format
	cardType: integer('card_type').notNull().default(CARD_TYPE.GENERIC),

	// Authorize.Net tokens
	customerProfileId: text('customer_profile_id'), // Authorize.Net customer ID
	paymentProfileId: text('payment_profile_id'), // Authorize.Net payment profile ID
	shippingProfileId: text('shipping_profile_id'),

	// Flags
	isDefault: integer('is_default').notNull().default(0),
	agreedSaved: integer('agreed_saved').notNull().default(0)
});

// Payments (credit card charges)
export const payments = sqliteTable('payments', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	clientId: integer('client_id')
		.notNull()
		.references(() => clients.id),
	paymentMethodId: integer('payment_method_id').references(() => paymentMethods.id),

	// Amount in cents
	amount: integer('amount').notNull(),

	// Authorize.Net response
	transactionId: text('transaction_id'), // Authorize.Net transaction ID
	responseCode: text('response_code'),
	messageCode: text('message_code'),
	authCode: text('auth_code'),
	refId: text('ref_id'),
	invoiceNumber: text('invoice_number'),

	description: text('description')
});

// Balances (derived from transactions, but cached for performance)
// NOTE: For true accuracy, always derive from walletTransactions sum
export const balances = sqliteTable('balances', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	// One of these will be set
	clientId: integer('client_id').references(() => clients.id),
	advisorId: integer('advisor_id').references(() => advisors.id),
	adminId: integer('admin_id').references(() => admins.id),

	// All amounts in cents
	balanceCash: integer('balance_cash').notNull().default(0),
	balanceBonus: integer('balance_bonus').notNull().default(0),
	balanceTotal: integer('balance_total').notNull().default(0)
});

// Wallet transactions (ledger-style - append only for audit trail)
// This is the source of truth for balances
export const walletTransactions = sqliteTable('wallet_transactions', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	// Transaction type: 'reading', 'withdrawal', 'deposit', 'payment', 'refund', 'bonus'
	type: text('type').notNull(),

	// Account type: 1=client, 2=advisor, 3=platform
	accountType: integer('account_type').notNull(),

	// Owner (one of these will be set)
	clientId: integer('client_id').references(() => clients.id),
	advisorId: integer('advisor_id').references(() => advisors.id),
	adminId: integer('admin_id').references(() => admins.id),

	// Related entities
	readingId: integer('reading_id').references(() => readings.id),
	paymentId: integer('payment_id').references(() => payments.id),
	paymentMethodId: integer('payment_method_id').references(() => paymentMethods.id),

	// Reading method (if applicable): 1=chat, 2=text, 3=phone, 4=video
	readingMethod: integer('reading_method'),

	// Amounts in cents (positive = credit, negative = debit)
	amountCash: integer('amount_cash').notNull().default(0),
	amountBonus: integer('amount_bonus').notNull().default(0),
	amountTotal: integer('amount_total').notNull().default(0),

	// Running balance after this transaction (for quick lookups)
	balanceCash: integer('balance_cash').notNull().default(0),
	balanceBonus: integer('balance_bonus').notNull().default(0),
	balanceTotal: integer('balance_total').notNull().default(0),

	// Payment method info (snapshot at time of transaction)
	paymentMethod: text('payment_method'), // 'credit_card', 'wallet', etc.
	creditCardLast4: text('credit_card_last4'),
	creditCardName: text('credit_card_name'),

	// External references
	vendorTransactionId: text('vendor_transaction_id'), // Authorize.Net transaction ID
	vendorRefundId: text('vendor_refund_id'),

	// Description for display
	description: text('description'),
	clientName: text('client_name'),
	advisorName: text('advisor_name')
});

// Relations
export const paymentMethodsRelations = relations(paymentMethods, ({ one, many }) => ({
	client: one(clients, {
		fields: [paymentMethods.clientId],
		references: [clients.id]
	}),
	payments: many(payments),
	transactions: many(walletTransactions)
}));

export const paymentsRelations = relations(payments, ({ one, many }) => ({
	client: one(clients, {
		fields: [payments.clientId],
		references: [clients.id]
	}),
	paymentMethod: one(paymentMethods, {
		fields: [payments.paymentMethodId],
		references: [paymentMethods.id]
	}),
	transactions: many(walletTransactions)
}));

export const balancesRelations = relations(balances, ({ one }) => ({
	client: one(clients, {
		fields: [balances.clientId],
		references: [clients.id]
	}),
	advisor: one(advisors, {
		fields: [balances.advisorId],
		references: [advisors.id]
	}),
	admin: one(admins, {
		fields: [balances.adminId],
		references: [admins.id]
	})
}));

export const walletTransactionsRelations = relations(walletTransactions, ({ one }) => ({
	client: one(clients, {
		fields: [walletTransactions.clientId],
		references: [clients.id]
	}),
	advisor: one(advisors, {
		fields: [walletTransactions.advisorId],
		references: [advisors.id]
	}),
	admin: one(admins, {
		fields: [walletTransactions.adminId],
		references: [admins.id]
	}),
	reading: one(readings, {
		fields: [walletTransactions.readingId],
		references: [readings.id]
	}),
	payment: one(payments, {
		fields: [walletTransactions.paymentId],
		references: [payments.id]
	}),
	paymentMethodRef: one(paymentMethods, {
		fields: [walletTransactions.paymentMethodId],
		references: [paymentMethods.id]
	})
}));

// Type exports
export type PaymentMethod = typeof paymentMethods.$inferSelect;
export type NewPaymentMethod = typeof paymentMethods.$inferInsert;
export type Payment = typeof payments.$inferSelect;
export type NewPayment = typeof payments.$inferInsert;
export type Balance = typeof balances.$inferSelect;
export type NewBalance = typeof balances.$inferInsert;
export type WalletTransaction = typeof walletTransactions.$inferSelect;
export type NewWalletTransaction = typeof walletTransactions.$inferInsert;
