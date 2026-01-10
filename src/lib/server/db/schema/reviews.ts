import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients } from './users';
import { readings } from './readings';

// Review status
export const REVIEW_STATUS = {
	PENDING: 0,
	ACTIVE: 1,
	REJECTED: 2
} as const;

// Reviews table
export const reviews = sqliteTable('reviews', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Status: 0=pending, 1=active, 2=rejected
	status: integer('status').notNull().default(REVIEW_STATUS.PENDING),

	// Related entities
	readingId: integer('reading_id').references(() => readings.id),
	advisorId: integer('advisor_id')
		.notNull()
		.references(() => advisors.id),
	clientId: integer('client_id')
		.notNull()
		.references(() => clients.id),

	// Display names (can be anonymized)
	reviewerName: text('reviewer_name'), // Client's display name for review
	advisorName: text('advisor_name'), // Snapshot of advisor name

	// Rating (1-5 stars)
	rating: integer('rating').notNull(),

	// Review content
	description: text('description'),

	// Engagement metrics
	thumbsUp: integer('thumbs_up').notNull().default(0),
	thumbsDown: integer('thumbs_down').notNull().default(0),

	// Display options
	sortOrder: integer('sort_order').notNull().default(0),
	featured: integer('featured').notNull().default(0),

	// Advisor reply
	replyStatus: integer('reply_status').notNull().default(0),
	replyText: text('reply_text'),
	repliedAt: integer('replied_at', { mode: 'timestamp' })
});

// Relations
export const reviewsRelations = relations(reviews, ({ one }) => ({
	reading: one(readings, {
		fields: [reviews.readingId],
		references: [readings.id]
	}),
	advisor: one(advisors, {
		fields: [reviews.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [reviews.clientId],
		references: [clients.id]
	})
}));

// Type exports
export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
