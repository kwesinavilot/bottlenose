"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

export default function ResetPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email) {
        toast.success("Password reset link sent!");
        // Optionally redirect or show further instructions
      } else {
        toast.error("Please enter your email.");
      }
    }, 1000);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-xs"
      onSubmit={handleReset}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Reset your password</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email and we'll send you a password reset link.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
            placeholder="m@example.com"
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          Send Reset Link
        </Button>
      </div>
      <div className="text-center text-sm">
        Remembered your password?{" "}
        <a href="/auth/signin" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </form>
  );
}
