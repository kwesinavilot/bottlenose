import { PrismaClient } from "@prisma/client";
import { sendMail } from "@/lib/sendMail";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(req) {
  const { email } = await req.json();
  if (!email) return new Response("Missing email", { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return new Response("OK"); // Don't leak user existence

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

  await prisma.verificationToken.create({
    data: {
      identifier: email,
      token,
      expires,
    },
  });

  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;

  await sendMail({
    to: email,
    subject: "Reset your password",
    html: `
      <p>Click the link below to reset your password:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>If you did not request this, you can ignore this email.</p>
    `,
  });

  return new Response("OK");
}
