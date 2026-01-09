# Clairvora Build Plan

## Tech Stack

| Layer | Choice | Cost |
|-------|--------|------|
| Frontend | SvelteKit | Free |
| Styling | Tailwind CSS 4 | Free |
| Hosting | Cloudflare Pages | Free tier |
| API | Cloudflare Workers | Free tier |
| Database | Cloudflare D1 (SQLite) | Free tier |
| Real-time | Cloudflare Durable Objects | ~$5-15/mo |
| Auth | Clerk | ~$25-35/mo |
| Files | Cloudflare R2 | Free tier |
| Payments | Authorize.Net | Existing |
| Phone/SMS | Twilio | Existing |
| Email | SendGrid | Existing |

**Estimated monthly cost: ~$30-50**

## Architecture

Four separate repos/deployments that share D1 database and Clerk auth:

| Repo | Purpose | URL |
|------|---------|-----|
| `clairvora` | Main app (public, client, advisor dashboards, payments, text/email readings) | clairvora.com |
| `clairvora-chat` | Real-time WebSocket chat (Durable Objects) | chat.clairvora.com |
| `clairvora-phone` | Real-time voice/video (Twilio Workers) | phone.clairvora.com |
| `clairvora-admin` | Admin dashboard | admin.clairvora.com |

## Reference

Legacy PHP codebase at `/Users/softdev/Sites/clairvora-legacy/` for business logic and schema reference.

## Build Phases

### Phase 1: Foundation & Design
- [x] Project setup (SvelteKit, Cloudflare adapter, Tailwind)
- [ ] D1 database setup
- [x] Clerk integration (Email, Google, Facebook, Apple sign-in)
- [ ] R2 for file storage
- [x] Design system (colors, typography, spacing, components) - see DESIGN-SYSTEM.md
- [x] Homepage (hero, featured advisors, how it works, trust signals)

### Phase 2: Public Pages
- [ ] Advisor directory with filters
- [ ] Individual advisor profiles
- [ ] About pages (how it works, guarantee, etc.)
- [ ] Blog (if keeping)
- [x] Login page (custom UI with Clerk SignIn)
- [x] Signup page (custom UI with Clerk SignUp)

### Phase 3: Auth & Account Shells
- [x] Clerk auth flows (client & advisor) - see CLAUDE.md Authentication section
- [ ] Role-based routing (client vs advisor)
- [ ] Client dashboard shell (navigation only)
- [ ] Advisor dashboard shell (navigation only)

### Phase 4: Payments & Wallet
- [ ] Authorize.Net integration
- [ ] Add/manage payment methods
- [ ] Add funds to balance
- [ ] Transaction history
- [ ] Balance display

### Phase 5: Client Account (Heavy)
- [ ] Dashboard (overview stats, recent activity, quick actions)
- [ ] Readings (history, transcripts, details, initiate new)
- [ ] Wallet (balance, add funds, payment methods, transactions)
- [ ] Favorites (add/remove advisors, view list)
- [ ] Messages (inbox, sent, compose)
- [ ] Rewards (tier status, history, free readings)
- [ ] Settings (profile, notifications, privacy, password)
- [ ] Support (submit ticket, view history)

### Phase 6: Advisor Account (Heavy)
- [ ] Dashboard (earnings, recent readings, reviews summary)
- [ ] Readings (incoming requests, active, history, details)
- [ ] Profile (bio, photo, specialties, tools, styles)
- [ ] Schedule (availability by day, timezone, exclusions)
- [ ] Rates (per reading type: chat, phone, text, email)
- [ ] Wallet (balance, transactions, withdrawals)
- [ ] Reviews (view all, respond)
- [ ] Clients (past clients, favorites)
- [ ] Settings (notifications, account, password)
- [ ] Support (submit ticket, view history)

### Phase 7: Readings - Text/Email
- [ ] Reading initiation flow
- [ ] Advisor acceptance
- [ ] Text (SMS) readings via Twilio
- [ ] Email readings via SendGrid
- [ ] Reading history

### Phase 8: Real-Time Chat
**Backend already complete** - `clairvora-chat` Worker deployed at `clairvora-chat.jason-brindel.workers.dev`

Completed (in separate repo):
- [x] Durable Objects ChatRoom setup
- [x] WebSocket handler with auth
- [x] JWT authentication
- [x] Message sync to database
- [x] Billing integration
- [x] Typing indicators (backend)

Remaining (frontend):
- [ ] SvelteKit chat interface
- [ ] WebSocket client connection
- [ ] Typing indicators (UI)
- [ ] Reading timer (UI)
- [ ] Live balance updates (UI)
- [ ] End reading flow (UI)
- [ ] Custom domain (chat.clairvora.com) - deferred

### Phase 9: Phone/Video (Heavy)
**Separate repo: `clairvora-phone`**

- [ ] Project setup (Cloudflare Workers)
- [ ] TwiML endpoints
- [ ] Call initiation
- [ ] Conference room setup
- [ ] Status callbacks
- [ ] Recording (if needed)
- [ ] Timer integration
- [ ] D1 integration for reading records
- [ ] Custom domain (phone.clairvora.com)

### Phase 10: Admin Panel
**Separate repo: `clairvora-admin`**

- [ ] Project setup (SvelteKit, Cloudflare adapter)
- [ ] Admin auth (Clerk role)
- [ ] User management
- [ ] Reading oversight
- [ ] Refunds
- [ ] Support tickets
- [ ] Basic analytics
- [ ] Custom domain (admin.clairvora.com)

### Phase 11: Polish & Launch
- [ ] Error handling
- [ ] Email templates
- [ ] SMS notifications
- [ ] Cron jobs (Workers scheduled)
- [ ] Testing
- [ ] DNS cutover

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| SvelteKit over Astro | SvelteKit | ~70% of pages are highly interactive (dashboards, forms, real-time) |
| D1 over PlanetScale | D1 | Faster (native edge), free, can migrate later if needed |
| Clerk for auth | Clerk | Non-negotiable for payments platform, protects payment profile IDs |
| Start with homepage | Homepage first | Establish design system so every subsequent page builds faster |
