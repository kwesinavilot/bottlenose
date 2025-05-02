"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import Image from "next/image";
import { GalleryVerticalEnd } from "lucide-react";

export default function MagicLink() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleMagicLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email) {
        toast.success("Magic link sent! Check your email.");
        // Optionally redirect or show further instructions
      } else {
        toast.error("Please enter your email.");
      }
    }, 1000);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-xs"
      onSubmit={handleMagicLink}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign in with Magic Link</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email and we'll send you a magic sign-in link.
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
          Send Magic Link
        </Button>
      </div>
      <div className="text-center text-sm">
        Want to use your password?{" "}
        <a href="/auth/signin" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </form>
  );
}
