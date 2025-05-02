"use client";
import { useSearchParams } from "next/navigation";

const errorMessages = {
  Configuration: "There is a problem with the server configuration.",
  AccessDenied: "Access denied.",
  Verification: "The sign-in link is invalid or has expired.",
  default: "An unknown error occurred.",
};

export default function AuthError() {
  const params = useSearchParams();
  const error = params.get("error");
  const message = errorMessages[error] || errorMessages.default;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
      <p>{message}</p>
    </div>
  );
}
