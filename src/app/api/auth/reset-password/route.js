import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  const { token, password } = await req.json();
  if (!token || !password) return new Response("Missing data", { status: 400 });

  const record = await prisma.verificationToken.findUnique({ where: { token } });
  if (!record || record.expires < new Date()) {
    return new Response("Invalid or expired token", { status: 400 });
  }

  await prisma.user.update({
    where: { email: record.identifier },
    data: { password: await bcrypt.hash(password, 10) },
  });

  await prisma.verificationToken.delete({ where: { token } });

  return new Response("OK");
}
