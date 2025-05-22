import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import authConfig from "@/../config/auth";
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

providers.push(
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email", placeholder: "you@example.com" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) {
        throw new Error("Missing email or password");
      }

      const user = await prisma.user.findUnique({
        where: { email: credentials.email },
      });

      if (!user || !user.password) {
        throw new Error("No user found");
      }

      const isValid = await bcrypt.compare(credentials.password, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }

      // Remove password from user object before returning
      const { password, ...userWithoutPassword } = user;
      
      return userWithoutPassword;
    },
  })
);

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
  callbacks: {
    async session({ session, token, user }) {
      // Attach user id to session if available
      if (token?.sub) session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
