import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients } from './users';

// Promotional campaigns
export const promos = sqliteTable('promos', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Active date range (stored as ISO date strings)
	dateStart: text('date_start'),
	dateEnd: text('date_end'),

	// Content
	category: text('category'),
	title: text('title'),
	subject: text('subject'), // Email subject
	messageShort: text('message_short'),
	messageLong: text('message_long'),

	// Status
	status: integer('status').notNull().default(1)
});

// Reward tiers (loyalty program levels)
export const rewardTiers = sqliteTable('reward_tiers', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	// Tier level (1, 2, 3, etc.)
	tier: integer('tier').notNull(),
	title: text('title').notNull(),

	// Requirements (minimum spend in cents)
	minimumSpend: integer('minimum_spend').notNull().default(0),

	// Benefits (discount in basis points, e.g., 500 = 5%)
	discount: integer('discount').notNull().default(0),

	// Complimentary readings per period
	complimentaryReadings: integer('complimentary_readings').notNull().default(0)
});

// Individual rewards earned
export const rewards = sqliteTable('rewards', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	// Who earned the reward
	advisorId: integer('advisor_id').references(() => advisors.id),
	clientId: integer('client_id').references(() => clients.id),

	// Referral info (if reward came from referral)
	referralId: integer('referral_id'), // The referral record
	referralClientId: integer('referral_client_id').references(() => clients.id),

	// Reward type: 'referral', 'tier_bonus', 'promo', etc.
	type: text('type').notNull(),

	// Current tier when reward was earned
	tier: integer('tier'),

	// Credit amount in cents
	credit: integer('credit').notNull().default(0)
});

// Reward tier history (tracks user progression through tiers)
export const rewardTierHistory = sqliteTable('reward_tier_history', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(1),

	// Who changed tier
	advisorId: integer('advisor_id').references(() => advisors.id),
	clientId: integer('client_id').references(() => clients.id),

	// The tier they moved to
	rewardTierId: integer('reward_tier_id')
		.notNull()
		.references(() => rewardTiers.id)
});

// Relations
export const rewardTiersRelations = relations(rewardTiers, ({ many }) => ({
	history: many(rewardTierHistory)
}));

export const rewardsRelations = relations(rewards, ({ one }) => ({
	advisor: one(advisors, {
		fields: [rewards.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [rewards.clientId],
		references: [clients.id]
	}),
	referralClient: one(clients, {
		fields: [rewards.referralClientId],
		references: [clients.id]
	})
}));

export const rewardTierHistoryRelations = relations(rewardTierHistory, ({ one }) => ({
	advisor: one(advisors, {
		fields: [rewardTierHistory.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [rewardTierHistory.clientId],
		references: [clients.id]
	}),
	rewardTier: one(rewardTiers, {
		fields: [rewardTierHistory.rewardTierId],
		references: [rewardTiers.id]
	})
}));

// Type exports
export type Promo = typeof promos.$inferSelect;
export type NewPromo = typeof promos.$inferInsert;
export type RewardTier = typeof rewardTiers.$inferSelect;
export type NewRewardTier = typeof rewardTiers.$inferInsert;
export type Reward = typeof rewards.$inferSelect;
export type NewReward = typeof rewards.$inferInsert;
export type RewardTierHistory = typeof rewardTierHistory.$inferSelect;
export type NewRewardTierHistory = typeof rewardTierHistory.$inferInsert;
