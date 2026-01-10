import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Clients table
export const clients = sqliteTable('clients', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Status: 0=closed, 1=active, 2=incomplete, 3=suspended
	status: integer('status').notNull().default(1),
	available: integer('available').notNull().default(0),

	// Clerk integration
	clerkUserId: text('clerk_user_id').unique(),

	// Personal info
	nameFirst: text('name_first'),
	nameLast: text('name_last'),
	email: text('email').notNull(),
	emailVerified: integer('email_verified').notNull().default(0),
	phone: text('phone'),
	phoneVerified: integer('phone_verified').notNull().default(0),
	phoneMobile: text('phone_mobile'),
	phoneMobileVerified: integer('phone_mobile_verified').notNull().default(0),

	// Address
	address: text('address'),
	city: text('city'),
	state: text('state'),
	zip: text('zip'),
	country: text('country').default('USA'),

	// Profile
	dob: text('dob'), // Store as ISO date string
	timezone: text('timezone').default('America/New_York'),
	imageUrl: text('image_url'),
	imageThumbUrl: text('image_thumb_url'),

	// Notification preferences
	notificationFeedback: integer('notification_feedback').notNull().default(1),
	notificationOffers: integer('notification_offers').notNull().default(1),
	notificationNewsletter: integer('notification_newsletter').notNull().default(1),
	notificationReferrals: integer('notification_referrals').notNull().default(1),
	notificationSurveys: integer('notification_surveys').notNull().default(1),

	// Payment preferences
	refillStatus: integer('refill_status').notNull().default(0),
	agreedUseSavedCards: integer('agreed_use_saved_cards').notNull().default(0),
	backupPaymentsStatus: integer('backup_payments_status').notNull().default(0)
});

// Advisors table
export const advisors = sqliteTable('advisors', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Status: 0=inactive, 1=active
	status: integer('status').notNull().default(0),
	available: integer('available').notNull().default(0),

	// Clerk integration
	clerkUserId: text('clerk_user_id').unique(),

	// Personal info
	nameFirst: text('name_first'),
	nameLast: text('name_last'),
	nameDisplay: text('name_display').notNull(),
	subtitle: text('subtitle'),
	email: text('email').notNull(),
	emailVerified: integer('email_verified').notNull().default(0),
	phone: text('phone'),
	phoneVerified: integer('phone_verified').notNull().default(0),
	phoneMobile: text('phone_mobile'),
	phoneMobileVerified: integer('phone_mobile_verified').notNull().default(0),

	// Address
	address: text('address'),
	city: text('city'),
	state: text('state'),
	zip: text('zip'),
	country: text('country').default('USA'),

	// Profile
	timezone: text('timezone').default('America/New_York'),
	imageUrl: text('image_url'),
	imageThumbUrl: text('image_thumb_url'),

	// Professional info
	experience: integer('experience'), // Years of experience
	specialties: text('specialties'), // Comma-separated or JSON
	tools: text('tools'), // Comma-separated or JSON
	style: text('style'),
	descriptionShort: text('description_short'),
	descriptionLong: text('description_long'),

	// Rating & badges
	rating: text('rating'), // Stored as text, parsed as decimal (e.g., "4.85")
	premier: integer('premier').notNull().default(0),
	risingTalent: integer('rising_talent').notNull().default(0),
	isNew: integer('is_new').notNull().default(1),

	// Reading methods enabled
	methodChat: integer('method_chat').notNull().default(0),
	methodText: integer('method_text').notNull().default(0),
	methodPhone: integer('method_phone').notNull().default(0),
	methodVideo: integer('method_video').notNull().default(0),

	// Rates (stored as cents to avoid floating point issues)
	rateChat: integer('rate_chat'), // Cents per minute
	rateText: integer('rate_text'), // Cents per reading
	ratePhone: integer('rate_phone'), // Cents per minute
	rateVideo: integer('rate_video'), // Cents per minute

	// Commission percentage (stored as basis points, e.g., 7000 = 70%)
	ratePercentage: integer('rate_percentage').notNull().default(7000)
});

// Admin users table
export const admins = sqliteTable('admins', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),
	available: integer('available').notNull().default(0),

	clerkUserId: text('clerk_user_id').unique(),

	nameFirst: text('name_first'),
	nameLast: text('name_last'),
	nameDisplay: text('name_display').notNull(),
	email: text('email').notNull(),
	phone: text('phone'),
	phoneMobile: text('phone_mobile'),
	timezone: text('timezone').default('America/New_York')
});

// Type exports for use in application code
export type Client = typeof clients.$inferSelect;
export type NewClient = typeof clients.$inferInsert;
export type Advisor = typeof advisors.$inferSelect;
export type NewAdvisor = typeof advisors.$inferInsert;
export type Admin = typeof admins.$inferSelect;
export type NewAdmin = typeof admins.$inferInsert;
