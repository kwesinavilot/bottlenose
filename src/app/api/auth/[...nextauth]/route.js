import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import authConfig from "@/../config/auth";
import mailConfig from "@/../config/mail";
import { sendMail } from "@/lib/sendMail";

const prisma = new PrismaClient();

const providers = [];

if (authConfig.google.enabled) {
  providers.push(
    GoogleProvider({
      clientId: authConfig.google.clientId,
      clientSecret: authConfig.google.clientSecret,
    })
  );
}

if (authConfig.email.enabled || authConfig.magicLink.enabled) {
  providers.push(
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier, url, provider }) {
        const { host } = new URL(url);
        await sendMail({
          to: identifier,
          subject: `Sign in to ${host}`,
          html: `
            <p>Sign in as <b>${identifier}</b></p>
            <p><a href="${url}">Click here to sign in</a></p>
            <p>If you did not request this, you can ignore this email.</p>
          `,
        });
      },
    })
  );
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
