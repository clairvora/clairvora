# CLAUDE.md - Clairvora Main App

## Project Overview

Clairvora is a psychic reading marketplace connecting clients with advisors. This is the main SvelteKit application handling:
- Public pages (homepage, advisor directory, about pages)
- Client dashboard (readings, wallet, favorites, settings)
- Advisor dashboard (profile, schedule, earnings, clients)
- Payments (Authorize.Net)
- Text/email readings (Twilio SMS, SendGrid email)

## Tech Stack

- **Framework:** SvelteKit with TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Cloudflare D1 (SQLite)
- **Auth:** Clerk
- **Hosting:** Cloudflare Pages
- **Payments:** Authorize.Net
- **Email:** SendGrid
- **SMS:** Twilio

## Related Services

This app works with three other Cloudflare Workers services:

| Service | Repo | Purpose |
|---------|------|---------|
| Chat | `clairvora-chat` | Real-time WebSocket chat readings |
| Phone | `clairvora-phone` | Twilio voice/video call readings |
| Admin | `clairvora-admin` | Internal admin dashboard |

All services share the same D1 database and Clerk auth.

## Reference Code

The legacy PHP codebase is at `/Users/softdev/Sites/clairvora-legacy/`. Use it to understand existing business logic, database schema, and feature requirements. Key files:

| File | Purpose |
|------|---------|
| `_includes/functions_PAYMENTS.php` | Payment processing logic |
| `_includes/functions_READINGS.php` | Reading lifecycle |
| `_includes/functions_CLIENTS.php` | Client operations |
| `_includes/functions_ADVISORS.php` | Advisor operations |
| `httpdocs/account/client/` | Client dashboard pages |
| `httpdocs/account/advisor/` | Advisor dashboard pages |

## Project Structure

```
src/
├── routes/
│   ├── (public)/           # Homepage, directory, about pages
│   ├── (auth)/             # Sign in, sign up (Clerk)
│   ├── account/
│   │   ├── client/         # Client dashboard
│   │   └── advisor/        # Advisor dashboard
│   ├── readings/           # Reading interfaces
│   └── api/                # API endpoints
├── lib/
│   ├── server/             # Server-only code (db, auth)
│   └── components/         # Shared UI components
└── app.css                 # Tailwind entry point
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Conventions

- Use Svelte 5 runes (`$state`, `$derived`, `$effect`)
- Server-side data loading via `+page.server.ts`
- Form handling via SvelteKit form actions
- Type-safe database queries with Drizzle ORM (when added)
- All API routes return JSON with consistent error structure

## Environment Variables

Set via Cloudflare dashboard or `wrangler secret`:
- `CLERK_SECRET_KEY` - Clerk authentication
- `AUTHORIZE_NET_API_LOGIN` - Payment processing
- `AUTHORIZE_NET_TRANSACTION_KEY` - Payment processing
- `SENDGRID_API_KEY` - Email delivery
- `TWILIO_ACCOUNT_SID` - SMS
- `TWILIO_AUTH_TOKEN` - SMS
