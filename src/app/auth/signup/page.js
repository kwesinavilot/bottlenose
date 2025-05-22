"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { signIn, useSession } from "next-auth/react";

// Simple password strength checker
function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Za-z]/.test(password) && /\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

export default function SignUp() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

  // Field error states
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  // Password validation checks
  const isLength = password.length >= 8 && password.length <= 20;
  const hasLettersAndNumbers = /[A-Za-z]/.test(password) && /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const passwordValid = isLength && hasLettersAndNumbers && hasSpecial;

  const handleGoogleSignUp = async () => {
    setFormError("");
    setFirstError("");
    setLastError("");
    setEmailError("");
    setPasswordError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Signed up with Google!");
      router.push("/dashboard");
    }, 1200);
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setFormError("");
    setFirstError("");
    setLastError("");
    setEmailError("");
    setPasswordError("");

    let hasError = false;
    if (!first) {
      setFirstError("First name is required.");
      hasError = true;
    }
    if (!last) {
      setLastError("Last name is required.");
      hasError = true;
    }
    if (!email) {
      setEmailError("Email is required.");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required.");
      hasError = true;
    } else if (!passwordValid) {
      setPasswordError("Password does not meet requirements.");
      hasError = true;
    }
    if (hasError) return;

    setLoading(true);
    try {
      // Call your API route to create the user
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first, last, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        // Show field-specific errors if possible
        if (data.message?.toLowerCase().includes("email")) {
          setEmailError(data.message);
        } else {
          setFormError(data.message || "Sign up failed.");
        }
        setLoading(false);
        return;
      }
      toast.success("Account created! Signing you in...");
      // Automatically sign in the user after successful registration
      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      setLoading(false);
      if (signInRes?.error) {
        setFormError(signInRes.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setLoading(false);
      setFormError("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      className="flex flex-col gap-6 max-w-md"
      onSubmit={handleEmailSignUp}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        {/* <p className="text-balance text-sm text-muted-foreground">
          Enter your details to sign up
        </p> */}
      </div>
      <div className="grid gap-6">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignUp}
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Sign up with Google
        </Button>

        <div className="relative text-center text-sm text-muted-foreground">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            or continue with email
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-2">
            <Label htmlFor="first">First Name</Label>
            <Input
              id="first"
              type="text"
              autoComplete="given-name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              disabled={loading}
              required
              placeholder="Pope"
            />
            {firstError && <div className="text-xs text-red-600">{firstError}</div>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="last">Last Name</Label>
            <Input
              id="last"
              type="text"
              autoComplete="family-name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              disabled={loading}
              required
              placeholder="Nanal"
            />
            {lastError && <div className="text-xs text-red-600">{lastError}</div>}
          </div>
        </div>

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
            placeholder="pope.nanal@naviware.com"
          />
          {emailError && <div className="text-xs text-red-600">{emailError}</div>}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            disabled={loading}
            required
            placeholder="$ecretKey419"
            minLength={8}
            maxLength={20}
          />
          {(passwordFocus || password) && (
            <PasswordRequirements
              isLength={isLength}
              hasLettersAndNumbers={hasLettersAndNumbers}
              hasSpecial={hasSpecial}
            />
          )}
          {passwordError && <div className="text-xs text-red-600">{passwordError}</div>}
        </div>
        {formError && <div className="text-xs text-red-600 text-center">{formError}</div>}
        <Button type="submit" className="w-full" disabled={loading || !passwordValid}>
          Sign Up
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/auth/signin" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
      <div className="text-center text-xs mt-2">
        <a href="/auth/reset-password" className="underline underline-offset-4">
          Forgot your password?
        </a>
      </div>
    </form>
  );
}

function PasswordRequirements({ isLength, hasLettersAndNumbers, hasSpecial }) {
  return (
    <div className="text-xs mt-2 space-y-1">
      <div className={isLength ? "text-green-600 flex items-center gap-1" : "text-muted-foreground flex items-center gap-1"}>
        <span>{isLength ? "✓" : "•"}</span>
        Between 8 and 20 characters
      </div>
      <div className={hasLettersAndNumbers ? "text-green-600 flex items-center gap-1" : "text-muted-foreground flex items-center gap-1"}>
        <span>{hasLettersAndNumbers ? "✓" : "•"}</span>
        A combination of letters and numbers
      </div>
      <div className={hasSpecial ? "text-green-600 flex items-center gap-1" : "text-muted-foreground flex items-center gap-1"}>
        <span>{hasSpecial ? "✓" : "•"}</span>
        1 or more special characters
      </div>
    </div>
  );
}
