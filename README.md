# Bottlenose

Bottlenose is your AI-powered, multi-agent newsletter and insights platform—named after the inquisitive, highly social bottlenose dolphin. It automates the end-to-end flow of research, writing, validation, translation, and delivery so that individuals and organizations can subscribe to, or produce, high-quality, timely newsletters without manual source-hunting.

## Core Value Proposition

- **Deep Research, Real-Time**  
  Uses Perplexity’s Sonar API to scan the live web, aggregate the latest developments on any topic, and surface only the most relevant, cited facts.
- **Multi-Agent Workflow**  
  - **Research Agent** harvests and ranks sources.  
  - **Validation Agent** cross-checks for accuracy and flags contradictions.  
  - **Authoring Agent** crafts concise summaries with natural-language transitions.  
  - **Styling Agent** applies your chosen tone (formal, humorous, satirical, etc.).  
  - **Translation Agent** localizes content into multiple languages.  
  - **Orator Agent** (optional) generates audio narrations or podcasts.
- **Flexible Delivery**  
  Schedule any cadence: daily at 8 AM, weekly on Mondays, monthly deep-dives—via email or webhook.  
- **Multi-Channel Delivery**  
  Email delivery powered by Mailgun, plus optional Slack/Webhook endpoints and downloadable PDF/HTML archives.  
- **White-Label & Theming**  
  Custom logo, color palette, and footer branding for agency or enterprise clients.  
- **A/B Testing Module**  
  Split-test subject lines, content variants, and send times to optimize engagement.  
- **Multilingual Support**  
  Automatic translation into each subscriber’s preferred language; auto-localized date/time and cultural references.  
- **SDK & API Access**  
  Expose integrations—chatbots, mobile apps, or internal systems—to subscribe users, trigger sends, or fetch archives programmatically.  
- **Security & Compliance**  
  Role-based access control, audit logging, GDPR-ready data handling, and end-to-end encryption for sensitive reports.

## Tech Stack

- **Next.js** (App Router) & **TypeScript**  
- **Tailwind CSS** & **shadcn/ui** component library  
- **React Query** for client-side data fetching & cache management  
- **NextAuth.js** for authentication (OAuth, email magic links)  
- **Prisma** + PostgreSQL for user, newsletter, and subscription data  
- **Zod** for runtime schema validation  
- **react-hook-form** for robust form handling  
- **next-i18next** for internationalization  
- **Mailgun** (`@mailgun/js`) for transactional email delivery  
- **Sentry** (`@sentry/nextjs`) for error tracking and performance monitoring  

## High-Level Architecture

1. **Frontend (Next.js App)**  
   - Multi-tenant portal for newsletter creation, scheduling, and analytics.
2. **Agents & Jobs**  
   - Serverless functions invoke Perplexity Sonar API and coordinate the research → validate → write → style → translate → (orate) pipeline.
3. **Database & Auth**  
   - Prisma + PostgreSQL stores definitions, schedules, subscriber lists, and archives.  
   - NextAuth.js secures access and session management.
4. **Email Delivery**  
   - Completed newsletters are sent via Mailgun’s API with templated content.
5. **Monitoring & Logging**  
   - Sentry captures errors and performance data.  
   - Application logs record job statuses and delivery events.

## Roadmap & Extensibility

- **Phase 1 – MVP**  
  - Topic wizard, basic research-to-email pipeline, individual subscriber flows, core analytics.
- **Phase 2 – Growth**  
  - Agency dashboard, white-label themes, A/B testing, multi-channel hooks.
- **Phase 3 – Enterprise**  
  - Single Sign-On (SAML/OIDC), advanced compliance (SOC 2), on-prem/self-hosted options.
- **Phase 4 – Ecosystem**  
  - Public SDKs, plugin marketplace (custom sentiment modules, domain-specific validators).

---

> Bottlenose harnesses the spirit of its namesake—curious, social, and intelligent—by diving deep across the web to surface the insights you care about, packaged in a polished, hands-off newsletter experience.
>