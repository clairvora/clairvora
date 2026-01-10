import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients } from './users';

// Reading methods enum values
export const READING_METHOD = {
	CHAT: 1,
	TEXT: 2,
	PHONE: 3,
	VIDEO: 4
} as const;

// Reading status enum values
export const READING_STATUS = {
	FAILED: 0,
	COMPLETED: 1,
	INITIATED: 2,
	ACTIVE: 3,
	COMPLETED_NO_CHARGE: 4,
	UNDER_REVIEW: 5
} as const;

// Readings table
export const readings = sqliteTable('readings', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	startedAt: integer('started_at', { mode: 'timestamp' }),
	endedAt: integer('ended_at', { mode: 'timestamp' }),

	// Status: 0=failed, 1=completed, 2=initiated, 3=active, 4=completed_no_charge, 5=under_review
	status: integer('status').notNull().default(READING_STATUS.INITIATED),

	// Participants
	advisorId: integer('advisor_id')
		.notNull()
		.references(() => advisors.id),
	clientId: integer('client_id')
		.notNull()
		.references(() => clients.id),

	// Snapshot of names at time of reading (for history)
	clientName: text('client_name'),
	advisorName: text('advisor_name'),

	// Method: 1=chat, 2=text, 3=phone, 4=video
	method: integer('method').notNull(),

	// Session state
	clientJoined: integer('client_joined').notNull().default(0),
	advisorJoined: integer('advisor_joined').notNull().default(0),
	endSession: integer('end_session').notNull().default(0),

	// Duration in seconds
	length: integer('length').notNull().default(0),

	// Response time (for text/email readings)
	responseTime: text('response_time'), // Stored as "HH:MM:SS"

	// Client context for reading
	clientDob: text('client_dob'),
	clientSituation: text('client_situation'),
	clientQuestion: text('client_question'),
	clientAnswer: text('client_answer'),
	advisorAnswer: text('advisor_answer'),

	// Transcript/recording
	transcript: text('transcript'),
	recordingId: text('recording_id'),

	// Text/email delivery tracking
	textToClient: integer('text_to_client').notNull().default(0),
	textToClientSent: integer('text_to_client_sent').notNull().default(0),
	emailToClient: integer('email_to_client').notNull().default(0),
	emailToClientSent: integer('email_to_client_sent').notNull().default(0),

	// Pricing (all in cents)
	rate: integer('rate').notNull(), // Rate at time of reading
	revenue: integer('revenue').notNull().default(0), // Total charged
	advisorPercentage: integer('advisor_percentage').notNull(), // Basis points (e.g., 7000 = 70%)
	commission: integer('commission').notNull().default(0), // Platform fee

	// Flags
	termsAccepted: integer('terms_accepted').notNull().default(0),
	isFree: integer('is_free').notNull().default(0),

	// Budget controls
	budgetExpires: integer('budget_expires', { mode: 'timestamp' }),
	budgetMax: integer('budget_max'), // Max seconds
	budgetAction: text('budget_action'), // Action when budget reached
	budgetWarnSent: integer('budget_warn_sent').notNull().default(0),

	// Video/phone conference IDs
	conferenceSid: text('conference_sid'),
	firstJoinerCallSid: text('first_joiner_call_sid'),

	// JSON messages for async readings (text/email)
	messagesClient: text('messages_client'), // JSON array
	messagesAdvisor: text('messages_advisor'), // JSON array

	// Internal notes
	notes: text('notes')
});

// Chat messages for live readings
export const chatMessages = sqliteTable('chat_messages', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	readingId: integer('reading_id')
		.notNull()
		.references(() => readings.id, { onDelete: 'cascade' }),
	advisorId: integer('advisor_id').references(() => advisors.id),
	clientId: integer('client_id').references(() => clients.id),

	// Direction: 1=from client, 2=from advisor
	direction: integer('direction').notNull(),

	message: text('message').notNull(),

	// Status flags
	messageStatus: integer('message_status').notNull().default(1),
	readingStatus: integer('reading_status').notNull(),

	// Processing flags (for async handling)
	clientProcessed: integer('client_processed').notNull().default(0),
	advisorProcessed: integer('advisor_processed').notNull().default(0)
});

// Reading timers for budget tracking
export const readingTimers = sqliteTable('reading_timers', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	readingId: integer('reading_id')
		.notNull()
		.references(() => readings.id, { onDelete: 'cascade' }),

	// Timer state
	startedAt: integer('started_at', { mode: 'timestamp' }),
	pausedAt: integer('paused_at', { mode: 'timestamp' }),
	elapsedSeconds: integer('elapsed_seconds').notNull().default(0),

	// Budget
	budgetSeconds: integer('budget_seconds'),
	warningSentAt: integer('warning_sent_at', { mode: 'timestamp' })
});

// Relations
export const readingsRelations = relations(readings, ({ one, many }) => ({
	advisor: one(advisors, {
		fields: [readings.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [readings.clientId],
		references: [clients.id]
	}),
	messages: many(chatMessages),
	timers: many(readingTimers)
}));

export const chatMessagesRelations = relations(chatMessages, ({ one }) => ({
	reading: one(readings, {
		fields: [chatMessages.readingId],
		references: [readings.id]
	}),
	advisor: one(advisors, {
		fields: [chatMessages.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [chatMessages.clientId],
		references: [clients.id]
	})
}));

export const readingTimersRelations = relations(readingTimers, ({ one }) => ({
	reading: one(readings, {
		fields: [readingTimers.readingId],
		references: [readings.id]
	})
}));

// Type exports
export type Reading = typeof readings.$inferSelect;
export type NewReading = typeof readings.$inferInsert;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type NewChatMessage = typeof chatMessages.$inferInsert;
export type ReadingTimer = typeof readingTimers.$inferSelect;
export type NewReadingTimer = typeof readingTimers.$inferInsert;
