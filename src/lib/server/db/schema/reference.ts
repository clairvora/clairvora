import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// US States reference table
export const states = sqliteTable('states', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	code: text('code').notNull().unique(), // 'CA', 'NY', etc.
	name: text('name').notNull(), // 'California', 'New York', etc.
	sortOrder: integer('sort_order').default(0)
});

// US ZIP codes reference table
export const zipCodes = sqliteTable('zip_codes', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	zip: text('zip').notNull(),
	city: text('city'),
	state: text('state'), // State code
	county: text('county'),
	latitude: text('latitude'),
	longitude: text('longitude'),
	timezone: text('timezone')
});

// Timezones reference table
export const timezones = sqliteTable('timezones', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	code: text('code').notNull().unique(), // 'America/New_York'
	name: text('name').notNull(), // 'Eastern Time'
	offset: text('offset'), // '-05:00'
	abbr: text('abbr'), // 'EST'
	sortOrder: integer('sort_order').default(0)
});

// User status codes reference
export const userStatuses = sqliteTable('user_statuses', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	code: integer('code').notNull().unique(),
	name: text('name').notNull(),
	description: text('description'),
	userType: text('user_type') // 'client', 'advisor', 'admin'
});

// Anonymous review names (for generating reviewer display names)
export const reviewNames = sqliteTable('review_names', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	category: text('category') // 'first_name', 'adjective', etc.
});

// Advisor categories/tags for filtering
export const advisorCategories = sqliteTable('advisor_categories', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	name: text('name').notNull(),
	slug: text('slug'), // URL-friendly
	description: text('description'),
	icon: text('icon'),
	sortOrder: integer('sort_order').default(0)
});

// Type exports
export type State = typeof states.$inferSelect;
export type NewState = typeof states.$inferInsert;
export type ZipCode = typeof zipCodes.$inferSelect;
export type NewZipCode = typeof zipCodes.$inferInsert;
export type Timezone = typeof timezones.$inferSelect;
export type NewTimezone = typeof timezones.$inferInsert;
export type UserStatus = typeof userStatuses.$inferSelect;
export type NewUserStatus = typeof userStatuses.$inferInsert;
export type ReviewName = typeof reviewNames.$inferSelect;
export type NewReviewName = typeof reviewNames.$inferInsert;
export type AdvisorCategory = typeof advisorCategories.$inferSelect;
export type NewAdvisorCategory = typeof advisorCategories.$inferInsert;
