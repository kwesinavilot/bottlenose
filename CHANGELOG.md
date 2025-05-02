# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.5.0] - 2025-04-28

### Added
- Added layout components for authentication pages, and integrated them into the existing authentication flow.
- Added SEO metadata components for better search engine visibility.

### Changed
- Updated authentication flow to enhance user experience and maintain consistency across all pages.
- Improved error handling and user feedback during authentication processes.

## [0.4.0] - 2025-04-28

### Changed
- Polished auth UI pages for consistency and responsiveness.
- Updated layout to include sticky nav and improved structure.
- Sign in page now uses shadcn-inspired layout and styling, while preserving all previous authentication logic and handlers.

## [0.3.0] - 2025-04-28

### Added
- Security middleware for HTTP headers and HTTPS enforcement.
- Standard landing page, About, and Contact Us pages using Tailwind and shadcn/ui.
- Sticky navigation bar across all pages.
- Responsive dashboard layout with left sidebar navigation.
- Improved responsiveness for all main pages.
- Example Contact Us form (UI only).
- Example About page.
- Dashboard with sidebar and placeholder navigation.
- Navigation links for dashboard, about, contact, and auth flows.

## [0.2.0] - 2025-04-27

### Added
- Magic link authentication support via NextAuth.js.
- Custom email sending for authentication (supports Mailgun, Resend, Mailtrap).
- Centralized mail config in `config/mail.js`.
- Password reset flow: forgot password, reset password UI and API endpoints.
- Added `password` field to Prisma User model.
- UI pages for sign in, verify request, error, forgot password, and reset password.
- Utility for sending emails (`src/lib/sendMail.js`).
- Custom `sendVerificationRequest` for NextAuth email/magic link provider.

### Changed
- Updated `.env.example` with mail provider variables.
- Updated README with new features and usage examples.

## [0.1.0] - 2025-04-26

### Added
- Centralized configuration management in `config/` folder.
- `.env.example` for environment variable documentation.
- Multi-database config support (Postgres, MySQL, SQLite, MongoDB).
- Authentication config support (Google, Email, Magic Link).
- Prisma ORM and NextAuth.js for authentication and database.
- Prisma schema with basic user/auth models.
- Migration drafts workflow: users can add migration drafts in `prisma/migrations/drafts/`.
- Script (`scripts/append-migrations.js`) to append migration drafts to `schema.prisma`.
- Changelog file using Keep a Changelog format.

### Changed
- `.gitignore` updated to ensure `.env` files are ignored.