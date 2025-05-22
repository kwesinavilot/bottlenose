import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { first, last, email, password } = await req.json();

    if (!first || !last || !email || !password) {
      return new Response(JSON.stringify({ message: "There are missing fields" }), { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return new Response(JSON.stringify({ message: "This email is already in use. Try a different one." }), { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        firstName: first,
        lastName: last,
      },
    });

    return new Response(JSON.stringify({ user: { id: user.id, email: user.email } }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error: " + err.message || "" }), { status: 500 });
  }
}
