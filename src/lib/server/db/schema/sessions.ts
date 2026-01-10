import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients, admins } from './users';

// NOTE: Primary authentication sessions are handled by Clerk.
// These tables track application-specific session data and analytics.

// Session tracking (analytics/audit purposes)
export const sessions = sqliteTable('sessions', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	startedAt: integer('started_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	endedAt: integer('ended_at', { mode: 'timestamp' }),

	// User (one of these, all optional for anonymous sessions)
	adminId: integer('admin_id').references(() => admins.id),
	advisorId: integer('advisor_id').references(() => advisors.id),
	clientId: integer('client_id').references(() => clients.id),

	status: integer('status').notNull().default(1),

	// Action that triggered session (e.g., 'login', 'signup', 'reading')
	action: text('action'),

	// Tracking
	referrer: text('referrer'),
	ipAddress: text('ip_address'),
	location: text('location'), // Geo-location string
	userAgent: text('user_agent'),
	device: text('device'),
	browser: text('browser'),

	// Engagement
	pageviews: integer('pageviews').default(0),
	duration: text('duration'), // Stored as "HH:MM:SS"

	// Error tracking
	error: text('error'),

	// Auth cookie reference (for legacy compatibility)
	authCookie: text('auth_cookie')
});

// Advisor-specific session data
export const advisorSessions = sqliteTable('advisor_sessions', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	sessionId: integer('session_id').references(() => sessions.id),
	advisorId: integer('advisor_id')
		.notNull()
		.references(() => advisors.id),

	// Advisor-specific metrics
	readingsCompleted: integer('readings_completed').default(0),
	minutesOnline: integer('minutes_online').default(0),
	earnings: integer('earnings').default(0) // In cents
});

// Verification codes (email/phone verification)
// NOTE: Primary auth verification is handled by Clerk.
// This is for application-specific verifications.
export const verificationCodes = sqliteTable('verification_codes', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),

	// Who requested the code (one of these)
	clientId: integer('client_id').references(() => clients.id),
	advisorId: integer('advisor_id').references(() => advisors.id),

	// Code details
	code: text('code').notNull(),
	type: text('type').notNull(), // 'email', 'phone', 'password_reset'
	target: text('target'), // Email or phone number being verified

	// Status: 0=pending, 1=verified, 2=expired
	status: integer('status').notNull().default(0),
	verifiedAt: integer('verified_at', { mode: 'timestamp' })
});

// Failed login attempts (rate limiting/security)
export const failedLogins = sqliteTable('failed_logins', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Identifier (email, username, or IP)
	identifier: text('identifier').notNull(),
	identifierType: text('identifier_type').notNull(), // 'email', 'ip'

	// Tracking
	ipAddress: text('ip_address'),
	userAgent: text('user_agent'),

	// Reason for failure
	reason: text('reason')
});

// Visitor blacklist (blocked IPs/users)
export const visitorBlacklist = sqliteTable('visitor_blacklist', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Block type: 'ip', 'email', 'user_agent'
	type: text('type').notNull(),
	value: text('value').notNull(),

	// Reason for block
	reason: text('reason'),

	// Expiration (null = permanent)
	expiresAt: integer('expires_at', { mode: 'timestamp' }),

	// Who blocked
	blockedBy: integer('blocked_by').references(() => admins.id)
});

// Advisor prospects (leads/applications)
export const advisorProspects = sqliteTable('advisor_prospects', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Status: 0=pending, 1=approved, 2=rejected, 3=contacted
	status: integer('status').notNull().default(0),

	// Contact info
	nameFirst: text('name_first'),
	nameLast: text('name_last'),
	email: text('email').notNull(),
	phone: text('phone'),

	// Application details
	experience: integer('experience'), // Years
	specialties: text('specialties'),
	bio: text('bio'),
	website: text('website'),

	// Internal notes
	notes: text('notes'),

	// If approved, link to advisor account
	advisorId: integer('advisor_id').references(() => advisors.id)
});

// Critical errors log (for debugging)
export const criticalErrors = sqliteTable('critical_errors', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Error details
	type: text('type'), // 'payment', 'reading', 'auth', etc.
	message: text('message'),
	stackTrace: text('stack_trace'),

	// Context
	userId: integer('user_id'),
	userType: text('user_type'), // 'client', 'advisor', 'admin'
	sessionId: integer('session_id'),
	requestUrl: text('request_url'),
	requestMethod: text('request_method'),
	requestBody: text('request_body'),

	// Resolution
	resolved: integer('resolved').notNull().default(0),
	resolvedAt: integer('resolved_at', { mode: 'timestamp' }),
	resolvedBy: integer('resolved_by').references(() => admins.id),
	resolution: text('resolution')
});

// Relations
export const sessionsRelations = relations(sessions, ({ one }) => ({
	admin: one(admins, {
		fields: [sessions.adminId],
		references: [admins.id]
	}),
	advisor: one(advisors, {
		fields: [sessions.advisorId],
		references: [advisors.id]
	}),
	client: one(clients, {
		fields: [sessions.clientId],
		references: [clients.id]
	})
}));

export const advisorSessionsRelations = relations(advisorSessions, ({ one }) => ({
	session: one(sessions, {
		fields: [advisorSessions.sessionId],
		references: [sessions.id]
	}),
	advisor: one(advisors, {
		fields: [advisorSessions.advisorId],
		references: [advisors.id]
	})
}));

export const advisorProspectsRelations = relations(advisorProspects, ({ one }) => ({
	advisor: one(advisors, {
		fields: [advisorProspects.advisorId],
		references: [advisors.id]
	})
}));

// Type exports
export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
export type AdvisorSession = typeof advisorSessions.$inferSelect;
export type NewAdvisorSession = typeof advisorSessions.$inferInsert;
export type VerificationCode = typeof verificationCodes.$inferSelect;
export type NewVerificationCode = typeof verificationCodes.$inferInsert;
export type FailedLogin = typeof failedLogins.$inferSelect;
export type NewFailedLogin = typeof failedLogins.$inferInsert;
export type VisitorBlacklist = typeof visitorBlacklist.$inferSelect;
export type NewVisitorBlacklist = typeof visitorBlacklist.$inferInsert;
export type AdvisorProspect = typeof advisorProspects.$inferSelect;
export type NewAdvisorProspect = typeof advisorProspects.$inferInsert;
export type CriticalError = typeof criticalErrors.$inferSelect;
export type NewCriticalError = typeof criticalErrors.$inferInsert;
