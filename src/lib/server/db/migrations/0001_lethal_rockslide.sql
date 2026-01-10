CREATE TABLE `contact_us` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`status` integer DEFAULT 0 NOT NULL,
	`name` text,
	`email` text,
	`phone` text,
	`subject` text,
	`message` text,
	`ip_address` text,
	`user_agent` text
);
--> statement-breakpoint
CREATE TABLE `emails` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`reading_id` integer,
	`client_id` integer,
	`advisor_id` integer,
	`admin_id` integer,
	`support_ticket_id` integer,
	`promo_id` integer,
	`direction` integer NOT NULL,
	`category` text NOT NULL,
	`email_from` text,
	`email_to` text,
	`email_reply_to` text,
	`subject` text,
	`message` text,
	`unsubscribe_token` text,
	`message_id` text,
	`imap_uid` integer,
	`format` text DEFAULT 'html',
	`status` text DEFAULT 'queued' NOT NULL,
	FOREIGN KEY (`reading_id`) REFERENCES `readings`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `twilio_calls` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`advisor_id` integer,
	`client_id` integer,
	`reading_id` integer,
	`support_id` integer,
	`conference_started_at` integer,
	`conference_ended_at` integer,
	`timestamp_from_twilio` text,
	`call_sid` text,
	`conference_sid` text,
	`account_sid` text,
	`parent_sid` text,
	`phone_number_sid` text,
	`recording_sid` text,
	`role` text,
	`conference_friendly_name` text,
	`status` text,
	`status_callback_event` text,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`reading_id`) REFERENCES `readings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `twilio_sms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`admin_id` integer,
	`advisor_id` integer,
	`client_id` integer,
	`reading_id` integer,
	`status` text NOT NULL,
	`response` text,
	`phone_number` text,
	`body` text,
	`sid` text,
	`message_sid` text,
	`sms_message_sid` text,
	`account_sid` text,
	`messaging_service_sid` text,
	`date_created` text,
	`date_sent` text,
	`date_updated` text,
	`direction` integer NOT NULL,
	FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`reading_id`) REFERENCES `readings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `unsubscribes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`email` text NOT NULL,
	`token` text,
	`reason` text,
	`client_id` integer,
	`advisor_id` integer,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `support_details` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`support_ticket_id` integer NOT NULL,
	`client_id` integer,
	`advisor_id` integer,
	`admin_id` integer,
	`message` text,
	`is_internal` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`support_ticket_id`) REFERENCES `support_tickets`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `support_tickets` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`status` integer DEFAULT 0 NOT NULL,
	`client_id` integer,
	`advisor_id` integer,
	`assigned_admin_id` integer,
	`subject` text,
	`category` text,
	`priority` integer DEFAULT 0,
	`contact_name` text,
	`contact_email` text,
	`contact_phone` text,
	`resolved_at` integer,
	`resolution` text,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`assigned_admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `promos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`date_start` text,
	`date_end` text,
	`category` text,
	`title` text,
	`subject` text,
	`message_short` text,
	`message_long` text,
	`status` integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `reward_tier_history` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`status` integer DEFAULT 1 NOT NULL,
	`advisor_id` integer,
	`client_id` integer,
	`reward_tier_id` integer NOT NULL,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`reward_tier_id`) REFERENCES `reward_tiers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `reward_tiers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`status` integer DEFAULT 1 NOT NULL,
	`tier` integer NOT NULL,
	`title` text NOT NULL,
	`minimum_spend` integer DEFAULT 0 NOT NULL,
	`discount` integer DEFAULT 0 NOT NULL,
	`complimentary_readings` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rewards` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`status` integer DEFAULT 1 NOT NULL,
	`advisor_id` integer,
	`client_id` integer,
	`referral_id` integer,
	`referral_client_id` integer,
	`type` text NOT NULL,
	`tier` integer,
	`credit` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`referral_client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `blog_posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`status` integer DEFAULT 0 NOT NULL,
	`advisor_id` integer,
	`featured` integer DEFAULT 0 NOT NULL,
	`byline` text,
	`byline_tagline` text,
	`byline_image_url` text,
	`title` text NOT NULL,
	`slug` text,
	`summary` text,
	`content` text,
	`image_url` text,
	`image_thumb_url` text,
	`meta_title` text,
	`meta_description` text,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`client_id` integer,
	`advisor_id` integer,
	`type` text NOT NULL,
	`title` text,
	`message` text,
	`link` text,
	`status` integer DEFAULT 0 NOT NULL,
	`read_at` integer
);
--> statement-breakpoint
CREATE TABLE `site_elements` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`status` integer DEFAULT 1 NOT NULL,
	`key` text NOT NULL,
	`title` text,
	`content` text,
	`image_url` text,
	`category` text,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE UNIQUE INDEX `site_elements_key_unique` ON `site_elements` (`key`);--> statement-breakpoint
CREATE TABLE `site_preferences` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`key` text NOT NULL,
	`value` text,
	`value_type` text DEFAULT 'string',
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `site_preferences_key_unique` ON `site_preferences` (`key`);--> statement-breakpoint
CREATE TABLE `terms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`version` text NOT NULL,
	`type` text DEFAULT 'general' NOT NULL,
	`title` text,
	`content` text,
	`effective_date` integer,
	`status` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `terms_signed` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`terms_id` integer NOT NULL,
	`client_id` integer,
	`advisor_id` integer,
	`ip_address` text,
	`user_agent` text,
	FOREIGN KEY (`terms_id`) REFERENCES `terms`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `advisor_categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`status` integer DEFAULT 1 NOT NULL,
	`name` text NOT NULL,
	`slug` text,
	`description` text,
	`icon` text,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `review_names` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`category` text
);
--> statement-breakpoint
CREATE TABLE `states` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE UNIQUE INDEX `states_code_unique` ON `states` (`code`);--> statement-breakpoint
CREATE TABLE `timezones` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`offset` text,
	`abbr` text,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE UNIQUE INDEX `timezones_code_unique` ON `timezones` (`code`);--> statement-breakpoint
CREATE TABLE `user_statuses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` integer NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`user_type` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_statuses_code_unique` ON `user_statuses` (`code`);--> statement-breakpoint
CREATE TABLE `zip_codes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`zip` text NOT NULL,
	`city` text,
	`state` text,
	`county` text,
	`latitude` text,
	`longitude` text,
	`timezone` text
);
--> statement-breakpoint
CREATE TABLE `advisor_prospects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`status` integer DEFAULT 0 NOT NULL,
	`name_first` text,
	`name_last` text,
	`email` text NOT NULL,
	`phone` text,
	`experience` integer,
	`specialties` text,
	`bio` text,
	`website` text,
	`notes` text,
	`advisor_id` integer,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `advisor_sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`session_id` integer,
	`advisor_id` integer NOT NULL,
	`readings_completed` integer DEFAULT 0,
	`minutes_online` integer DEFAULT 0,
	`earnings` integer DEFAULT 0,
	FOREIGN KEY (`session_id`) REFERENCES `sessions`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `critical_errors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`type` text,
	`message` text,
	`stack_trace` text,
	`user_id` integer,
	`user_type` text,
	`session_id` integer,
	`request_url` text,
	`request_method` text,
	`request_body` text,
	`resolved` integer DEFAULT 0 NOT NULL,
	`resolved_at` integer,
	`resolved_by` integer,
	`resolution` text,
	FOREIGN KEY (`resolved_by`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `failed_logins` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`identifier` text NOT NULL,
	`identifier_type` text NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`reason` text
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`started_at` integer NOT NULL,
	`ended_at` integer,
	`admin_id` integer,
	`advisor_id` integer,
	`client_id` integer,
	`status` integer DEFAULT 1 NOT NULL,
	`action` text,
	`referrer` text,
	`ip_address` text,
	`location` text,
	`user_agent` text,
	`device` text,
	`browser` text,
	`pageviews` integer DEFAULT 0,
	`duration` text,
	`error` text,
	`auth_cookie` text,
	FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `verification_codes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`expires_at` integer NOT NULL,
	`client_id` integer,
	`advisor_id` integer,
	`code` text NOT NULL,
	`type` text NOT NULL,
	`target` text,
	`status` integer DEFAULT 0 NOT NULL,
	`verified_at` integer,
	FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`advisor_id`) REFERENCES `advisors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `visitor_blacklist` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`type` text NOT NULL,
	`value` text NOT NULL,
	`reason` text,
	`expires_at` integer,
	`blocked_by` integer,
	FOREIGN KEY (`blocked_by`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action
);
