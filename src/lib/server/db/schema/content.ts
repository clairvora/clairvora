import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors } from './users';

// Blog posts (advisor-written content)
export const blogPosts = sqliteTable('blog_posts', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Status: 0=draft, 1=published, 2=archived
	status: integer('status').notNull().default(0),

	// Author
	advisorId: integer('advisor_id').references(() => advisors.id),

	// Featured post flag
	featured: integer('featured').notNull().default(0),

	// Byline (can differ from advisor name)
	byline: text('byline'),
	bylineTagline: text('byline_tagline'),
	bylineImageUrl: text('byline_image_url'),

	// Content
	title: text('title').notNull(),
	slug: text('slug'), // URL-friendly version of title
	summary: text('summary'),
	content: text('content'),

	// Images
	imageUrl: text('image_url'),
	imageThumbUrl: text('image_thumb_url'),

	// SEO
	metaTitle: text('meta_title'),
	metaDescription: text('meta_description')
});

// Site elements (CMS content blocks)
export const siteElements = sqliteTable('site_elements', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	// Element identifier (e.g., 'homepage_hero', 'footer_text')
	key: text('key').notNull().unique(),

	// Content
	title: text('title'),
	content: text('content'),
	imageUrl: text('image_url'),

	// Metadata
	category: text('category'),
	sortOrder: integer('sort_order').default(0)
});

// Site preferences (global configuration)
export const sitePreferences = sqliteTable('site_preferences', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Preference key (e.g., 'maintenance_mode', 'default_rate')
	key: text('key').notNull().unique(),

	// Value (stored as text, parse as needed)
	value: text('value'),

	// Type hint for parsing: 'string', 'number', 'boolean', 'json'
	valueType: text('value_type').default('string'),

	// Description for admin UI
	description: text('description')
});

// Terms of service versions
export const terms = sqliteTable('terms', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Version identifier
	version: text('version').notNull(),

	// Type: 'client', 'advisor', 'general'
	type: text('type').notNull().default('general'),

	// Content
	title: text('title'),
	content: text('content'),

	// Effective date
	effectiveDate: integer('effective_date', { mode: 'timestamp' }),

	// Status: 0=draft, 1=active, 2=archived
	status: integer('status').notNull().default(0)
});

// Terms acceptance records
export const termsSigned = sqliteTable('terms_signed', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	termsId: integer('terms_id')
		.notNull()
		.references(() => terms.id),

	// Who signed (one of these)
	clientId: integer('client_id'),
	advisorId: integer('advisor_id'),

	// Signature metadata
	ipAddress: text('ip_address'),
	userAgent: text('user_agent')
});

// Notifications (system notifications for users)
export const notifications = sqliteTable('notifications', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Recipient (one of these)
	clientId: integer('client_id'),
	advisorId: integer('advisor_id'),

	// Notification type: 'reading', 'payment', 'system', 'promo', etc.
	type: text('type').notNull(),

	// Content
	title: text('title'),
	message: text('message'),
	link: text('link'), // Optional link to related page

	// Status: 0=unread, 1=read, 2=dismissed
	status: integer('status').notNull().default(0),

	// Read timestamp
	readAt: integer('read_at', { mode: 'timestamp' })
});

// Relations
export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
	advisor: one(advisors, {
		fields: [blogPosts.advisorId],
		references: [advisors.id]
	})
}));

export const termsSignedRelations = relations(termsSigned, ({ one }) => ({
	terms: one(terms, {
		fields: [termsSigned.termsId],
		references: [terms.id]
	})
}));

// Type exports
export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;
export type SiteElement = typeof siteElements.$inferSelect;
export type NewSiteElement = typeof siteElements.$inferInsert;
export type SitePreference = typeof sitePreferences.$inferSelect;
export type NewSitePreference = typeof sitePreferences.$inferInsert;
export type Terms = typeof terms.$inferSelect;
export type NewTerms = typeof terms.$inferInsert;
export type TermsSigned = typeof termsSigned.$inferSelect;
export type NewTermsSigned = typeof termsSigned.$inferInsert;
export type Notification = typeof notifications.$inferSelect;
export type NewNotification = typeof notifications.$inferInsert;
