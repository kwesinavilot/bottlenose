![Endeavor Stare](https://static1.srcdn.com/wordpress/wp-content/uploads/2022/05/Endeavor-looking-grave-and-serious-in-My-Hero-Academia..jpg?q=50&fit=crop&w=1140&h=&dpr=1.5)

# Endeavor - Full-Stack Boilerplate for Building MVPs

Endeavor is a powerful, flexible, and feature-rich boilerplate for building full-stack MVP (Minimum Viable Product) applications. It provides a robust foundation for authentication, database, UI, and developer experience.

---

## ✨ Features

### Authentication

- **Google OAuth** (NextAuth.js)
- **Magic Link / Email Sign-In** (NextAuth.js)
- **Password-based authentication** (with password reset)
- **Custom email sending** (Mailgun, Resend, Mailtrap)
- **UI for all auth flows**: sign in, verify email, error, forgot/reset password

### Database

- **Prisma ORM** with multi-database support (Postgres, MySQL, SQLite, MongoDB)
- **Migration drafts workflow** for collaborative schema changes

### UI & Styling

- **Next.js 14+** (App Router)
- **Tailwind CSS** with custom theme
- **shadcn/ui** and **Mantine** ready
- **Responsive, accessible starter pages**

### Developer Experience

- **Centralized config** for auth, database, mail
- **.env.example** for environment variables
- **Changelog** and **README** with roadmap and usage
- **Scripts** for migration management

---

## 🚀 Getting Started

### 1. Create a New Project

```bash
npx create-endeavor-app my-app
cd my-app
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Set up your database, mail provider, and auth credentials.

### 3. Run Migrations

```bash
npx prisma migrate dev --name init
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 🛡️ Authentication Flows

### Sign In (Magic Link & Google)

- Visit `/auth/signin`
- Enter your email for a magic link, or use Google OAuth

### Password Reset

- Visit `/auth/forgot-password`
- Enter your email to receive a reset link
- Follow the link to `/auth/reset-password?token=...` and set a new password

### Email Verification

- Magic link sign-in emails are sent via your configured provider (Mailgun, Resend, or Mailtrap)
- Customize email templates in `src/app/api/auth/[...nextauth]/route.js` and `src/lib/sendMail.js`

---

## 📧 Mail Provider Setup

Configure your mail provider in `.env`:

```env
MAIL_PROVIDER=mailtrap # or mailgun, resend

# Mailgun
MAILGUN_API_KEY=...
MAILGUN_DOMAIN=...
MAILGUN_FROM=...

# Resend
RESEND_API_KEY=...
RESEND_FROM=...

# Mailtrap (for testing)
MAILTRAP_HOST=smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=...
MAILTRAP_PASS=...
MAILTRAP_FROM=...
```

---

## 🗄️ Database Setup

Configure your database in `.env`:

```env
DB_CONNECTION=postgres # or mysql, sqlite, mongodb
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=endeavor
DB_USERNAME=postgres
DB_PASSWORD=secret
DATABASE_URL=postgresql://postgres:secret@localhost:5432/endeavor
```

---

## 🧑‍💻 Example Usage

### Sign In with Magic Link

```js
import { signIn } from "next-auth/react";

await signIn("email", { email: "user@example.com", callbackUrl: "/" });
```

### Sign In with Google

```js
await signIn("google", { callbackUrl: "/" });
```

### Password Reset

1. User visits `/auth/forgot-password` and submits email.
2. Receives email with reset link.
3. Follows link to `/auth/reset-password?token=...` and sets new password.

---

## 🛠️ Project Structure

```
.
├── config/           # Centralized config (auth, database, mail)
├── prisma/           # Prisma schema and migrations
├── scripts/          # Utility scripts (e.g., append-migrations.js)
├── src/
│   ├── app/
│   │   ├── api/      # API routes (NextAuth, password reset, etc.)
│   │   ├── auth/     # Auth UI pages
│   │   ├── page.js   # Home page
│   │   └── layout.js # Root layout
│   ├── lib/          # Utilities (sendMail, etc.)
│   └── styles/       # Tailwind/global CSS
├── .env.example
├── package.json
└── README.md
```

---

## 🧩 Extending the Starter

- Add new Prisma models in `prisma/schema.prisma`
- Add new UI pages in `src/app/`
- Add new API endpoints in `src/app/api/`
- Customize email templates in `src/lib/sendMail.js`

---

## 🗺️ Roadmap

- [x] Magic link, Google, and password auth
- [x] Password reset flow
- [x] Custom email provider support
- [x] Migration drafts workflow
- [ ] Payment integration (Stripe, Paystack)
- [ ] Admin panel
- [ ] AI integrations (OpenAI, Claude, Unify, LlamaIndex)
- [ ] Internationalization (i18n)
- [ ] Advanced security & performance

---

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📄 License

MIT

---

Built with ❤️ and determination by Kwesi Navilot