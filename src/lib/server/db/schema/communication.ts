import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients, admins } from './users';
import { readings } from './readings';

// Email direction
export const EMAIL_DIRECTION = {
	INCOMING: 1,
	OUTGOING: 2
} as const;

// Email categories
export const EMAIL_CATEGORY = {
	READING: 'reading',
	VALIDATE: 'validate',
	ADMIN: 'admin',
	SUPPORT: 'support',
	PROMO: 'promo',
	CONTACT: 'contact',
	PAYMENT: 'payment'
} as const;

// Email status
export const EMAIL_STATUS = {
	QUEUED: 'queued',
	SENT: 'sent',
	FAILED: 'failed',
	RECEIVED: 'received',
	ERROR: 'error'
} as const;

// SMS direction
export const SMS_DIRECTION = {
	OUTGOING: 1,
	INCOMING: 2
} as const;

// Emails table
export const emails = sqliteTable('emails', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Related entities (all optional - depends on email type)
	readingId: integer('reading_id').references(() => readings.id),
	clientId: integer('client_id').references(() => clients.id),
	advisorId: integer('advisor_id').references(() => advisors.id),
	adminId: integer('admin_id').references(() => admins.id),
	supportTicketId: integer('support_ticket_id'), // FK added after support table defined
	promoId: integer('promo_id'), // FK added after promos table defined

	// Direction: 1=incoming, 2=outgoing
	direction: integer('direction').notNull(),

	// Category: reading, validate, admin, support, promo, contact, payment
	category: text('category').notNull(),

	// Email addresses
	emailFrom: text('email_from'),
	emailTo: text('email_to'),
	emailReplyTo: text('email_reply_to'),

	// Content
	subject: text('subject'),
	message: text('message'),

	// Tracking
	unsubscribeToken: text('unsubscribe_token'),
	messageId: text('message_id'), // SendGrid message ID
	imapUid: integer('imap_uid'),

	// Format: plain, html, multipart
	format: text('format').default('html'),

	// Status: queued, sent, failed, received, error
	status: text('status').notNull().default('queued')
});

// Twilio SMS messages
export const twilioSms = sqliteTable('twilio_sms', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Related entities
	adminId: integer('admin_id').references(() => admins.id),
	advisorId: integer('advisor_id').references(() => advisors.id),
	clientId: integer('client_id').references(() => clients.id),
	readingId: integer('reading_id').references(() => readings.id),

	// Twilio status: accepted, scheduled, canceled, queued, sending, sent, failed, delivered, undelivered, receiving, received
	status: text('status').notNull(),
	response: text('response'),

	// Phone number and message
	phoneNumber: text('phone_number'),
	body: text('body'),

	// Twilio identifiers
	sid: text('sid'),
	messageSid: text('message_sid'),
	smsMessageSid: text('sms_message_sid'),
	accountSid: text('account_sid'),
	messagingServiceSid: text('messaging_service_sid'),

	// Twilio timestamps (stored as text from API)
	dateCreated: text('date_created'),
	dateSent: text('date_sent'),
	dateUpdated: text('date_updated'),

	// Direction: 1=outgoing, 2=incoming
	direction: integer('direction').notNull()
});

// Twilio phone calls
export const twilioCalls = sqliteTable('twilio_calls', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Related entities
	advisorId: integer('advisor_id').references(() => advisors.id),
	clientId: integer('client_id').references(() => clients.id),
	readingId: integer('reading_id').references(() => readings.id),
	supportId: integer('support_id'), // FK to support tickets

	// Conference timestamps
	conferenceStartedAt: integer('conference_started_at', { mode: 'timestamp' }),
	conferenceEndedAt: integer('conference_ended_at', { mode: 'timestamp' }),
	timestampFromTwilio: text('timestamp_from_twilio'),

	// Twilio identifiers
	callSid: text('call_sid'),
	conferenceSid: text('conference_sid'),
	accountSid: text('account_sid'),
	parentSid: text('parent_sid'),
	phoneNumberSid: text('phone_number_sid'),
	recordingSid: text('recording_sid'),

	// Call metadata
	role: text('role'), // 'client', 'advisor', etc.
	conferenceFriendlyName: text('conference_friendly_name'),
	status: text('status'),
	statusCallbackEvent: text('status_callback_event')
});

// Contact form submissions
export const contactUs = sqliteTable('contact_us', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	status: integer('status').notNull().default(0),

	name: text('name'),
	email: text('email'),
	phone: text('phone'),
	subject: text('subject'),
	message: text('message'),

	// Tracking
	ipAddress: text('ip_address'),
	userAgent: text('user_agent')
});

// Unsubscribe tracking
export const unsubscribes = sqliteTable('unsubscribes', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	email: text('email').notNull(),
	token: text('token'),
	reason: text('reason'),

	// Related entities
	clientId: integer('client_id').references(() => clients.id),
	advisorId: integer('advisor_id').references(() => advisors.id)
});

// Relations
export const emailsRelations = relations(emails, ({ one }) => ({
	reading: one(readings, {
		fields: [emails.readingId],
		references: [readings.id]
	}),
	client: one(clients, {
		fields: [emails.clientId],
		references: [clients.id]
	}),
	advisor: one(advisors, {
		fields: [emails.advisorId],
		references: [advisors.id]
	}),
	admin: one(admins, {
		fields: [emails.adminId],
		references: [admins.id]
	})
}));

export const twilioSmsRelations = relations(twilioSms, ({ one }) => ({
	admin: one(admins, {
		fields: [twilioSms.adminId],
		references: [admins.id]
	}),
	advisor: one(advisors, {
		fields: [twilioSms.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [twilioSms.clientId],
		references: [clients.id]
	}),
	reading: one(readings, {
		fields: [twilioSms.readingId],
		references: [readings.id]
	})
}));

export const twilioCallsRelations = relations(twilioCalls, ({ one }) => ({
	advisor: one(advisors, {
		fields: [twilioCalls.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [twilioCalls.clientId],
		references: [clients.id]
	}),
	reading: one(readings, {
		fields: [twilioCalls.readingId],
		references: [readings.id]
	})
}));

export const unsubscribesRelations = relations(unsubscribes, ({ one }) => ({
	client: one(clients, {
		fields: [unsubscribes.clientId],
		references: [clients.id]
	}),
	advisor: one(advisors, {
		fields: [unsubscribes.advisorId],
		references: [advisors.id]
	})
}));

// Type exports
export type Email = typeof emails.$inferSelect;
export type NewEmail = typeof emails.$inferInsert;
export type TwilioSms = typeof twilioSms.$inferSelect;
export type NewTwilioSms = typeof twilioSms.$inferInsert;
export type TwilioCall = typeof twilioCalls.$inferSelect;
export type NewTwilioCall = typeof twilioCalls.$inferInsert;
export type ContactUs = typeof contactUs.$inferSelect;
export type NewContactUs = typeof contactUs.$inferInsert;
export type Unsubscribe = typeof unsubscribes.$inferSelect;
export type NewUnsubscribe = typeof unsubscribes.$inferInsert;
