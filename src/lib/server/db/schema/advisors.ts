import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients } from './users';

// Reading types/specialties (e.g., "Tarot", "Astrology", "Love & Relationships")
export const readingTypes = sqliteTable('reading_types', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	status: integer('status').notNull().default(1),
	name: text('name').notNull(),
	description: text('description'),
	descriptionShort: text('description_short'),
	variable: text('variable'), // URL-friendly slug
	icon: text('icon'),
	sortOrder: integer('sort_order').notNull().default(0)
});

// Junction table: advisors <-> reading types
export const advisorTypes = sqliteTable(
	'advisor_types',
	{
		advisorId: integer('advisor_id')
			.notNull()
			.references(() => advisors.id, { onDelete: 'cascade' }),
		typeId: integer('type_id')
			.notNull()
			.references(() => readingTypes.id, { onDelete: 'cascade' })
	},
	(table) => [primaryKey({ columns: [table.advisorId, table.typeId] })]
);

// Advisor weekly availability schedule
export const advisorAvailability = sqliteTable('advisor_availability', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	groupId: text('group_id'), // Groups related availability blocks
	advisorId: integer('advisor_id')
		.notNull()
		.references(() => advisors.id, { onDelete: 'cascade' }),

	// Day: 0=Sunday, 1=Monday, ..., 6=Saturday
	dayOfWeek: integer('day_of_week').notNull(),

	// Times stored as "HH:MM" in 24-hour format
	startTime: text('start_time').notNull(),
	endTime: text('end_time').notNull(),

	// Status: 'available', 'unavailable', 'in_session'
	status: text('status').notNull().default('available'),

	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
});

// Advisor time-off / exclusions from schedule
export const advisorExclusions = sqliteTable('advisor_exclusions', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	advisorId: integer('advisor_id')
		.notNull()
		.references(() => advisors.id, { onDelete: 'cascade' }),

	// Specific datetime range for exclusion
	startTime: integer('start_time', { mode: 'timestamp' }).notNull(),
	endTime: integer('end_time', { mode: 'timestamp' }).notNull(),

	// Type: 'time_off', 'manual_checkout'
	type: text('type').notNull().default('time_off'),
	reason: text('reason'),

	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
});

// Client favorites (saved advisors)
export const favorites = sqliteTable('favorites', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	clientId: integer('client_id')
		.notNull()
		.references(() => clients.id, { onDelete: 'cascade' }),
	advisorId: integer('advisor_id')
		.notNull()
		.references(() => advisors.id, { onDelete: 'cascade' })
});

// Relations
export const readingTypesRelations = relations(readingTypes, ({ many }) => ({
	advisorTypes: many(advisorTypes)
}));

export const advisorTypesRelations = relations(advisorTypes, ({ one }) => ({
	advisor: one(advisors, {
		fields: [advisorTypes.advisorId],
		references: [advisors.id]
	}),
	type: one(readingTypes, {
		fields: [advisorTypes.typeId],
		references: [readingTypes.id]
	})
}));

export const advisorAvailabilityRelations = relations(advisorAvailability, ({ one }) => ({
	advisor: one(advisors, {
		fields: [advisorAvailability.advisorId],
		references: [advisors.id]
	})
}));

export const advisorExclusionsRelations = relations(advisorExclusions, ({ one }) => ({
	advisor: one(advisors, {
		fields: [advisorExclusions.advisorId],
		references: [advisors.id]
	})
}));

export const favoritesRelations = relations(favorites, ({ one }) => ({
	client: one(clients, {
		fields: [favorites.clientId],
		references: [clients.id]
	}),
	advisor: one(advisors, {
		fields: [favorites.advisorId],
		references: [advisors.id]
	})
}));

// Type exports
export type ReadingType = typeof readingTypes.$inferSelect;
export type NewReadingType = typeof readingTypes.$inferInsert;
export type AdvisorAvailability = typeof advisorAvailability.$inferSelect;
export type NewAdvisorAvailability = typeof advisorAvailability.$inferInsert;
export type AdvisorExclusion = typeof advisorExclusions.$inferSelect;
export type NewAdvisorExclusion = typeof advisorExclusions.$inferInsert;
export type Favorite = typeof favorites.$inferSelect;
export type NewFavorite = typeof favorites.$inferInsert;
