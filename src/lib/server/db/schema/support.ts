import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { advisors, clients, admins } from './users';

// Support ticket status
export const SUPPORT_STATUS = {
	OPEN: 0,
	IN_PROGRESS: 1,
	RESOLVED: 2,
	CLOSED: 3
} as const;

// Support tickets
export const supportTickets = sqliteTable('support_tickets', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	// Status: 0=open, 1=in_progress, 2=resolved, 3=closed
	status: integer('status').notNull().default(SUPPORT_STATUS.OPEN),

	// Related user (one of these)
	clientId: integer('client_id').references(() => clients.id),
	advisorId: integer('advisor_id').references(() => advisors.id),

	// Assigned admin
	assignedAdminId: integer('assigned_admin_id').references(() => admins.id),

	// Ticket info
	subject: text('subject'),
	category: text('category'),
	priority: integer('priority').default(0),

	// Contact info (for non-logged-in users)
	contactName: text('contact_name'),
	contactEmail: text('contact_email'),
	contactPhone: text('contact_phone'),

	// Resolution
	resolvedAt: integer('resolved_at', { mode: 'timestamp' }),
	resolution: text('resolution')
});

// Support ticket details/messages
export const supportDetails = sqliteTable('support_details', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),

	supportTicketId: integer('support_ticket_id')
		.notNull()
		.references(() => supportTickets.id, { onDelete: 'cascade' }),

	// Who sent this message
	clientId: integer('client_id').references(() => clients.id),
	advisorId: integer('advisor_id').references(() => advisors.id),
	adminId: integer('admin_id').references(() => admins.id),

	// Message content
	message: text('message'),

	// Internal note (not visible to user)
	isInternal: integer('is_internal').notNull().default(0)
});

// Relations
export const supportTicketsRelations = relations(supportTickets, ({ one, many }) => ({
	client: one(clients, {
		fields: [supportTickets.clientId],
		references: [clients.id]
	}),
	advisor: one(advisors, {
		fields: [supportTickets.advisorId],
		references: [advisors.id]
	}),
	assignedAdmin: one(admins, {
		fields: [supportTickets.assignedAdminId],
		references: [admins.id]
	}),
	details: many(supportDetails)
}));

export const supportDetailsRelations = relations(supportDetails, ({ one }) => ({
	ticket: one(supportTickets, {
		fields: [supportDetails.supportTicketId],
		references: [supportTickets.id]
	}),
	client: one(clients, {
		fields: [supportDetails.clientId],
		references: [clients.id]
	}),
	advisor: one(advisors, {
		fields: [supportDetails.advisorId],
		references: [advisors.id]
	}),
	admin: one(admins, {
		fields: [supportDetails.adminId],
		references: [admins.id]
	})
}));

// Type exports
export type SupportTicket = typeof supportTickets.$inferSelect;
export type NewSupportTicket = typeof supportTickets.$inferInsert;
export type SupportDetail = typeof supportDetails.$inferSelect;
export type NewSupportDetail = typeof supportDetails.$inferInsert;
