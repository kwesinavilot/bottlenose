"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <Card className="w-full max-w-xl shadow-lg">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center">
                Build MVPs Faster with Endeavor
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-center mb-8">
              Endeavor is a full-stack boilerplate for authentication, database, and UI. Get started in minutes and scale with confidence.
            </p>

            <div className="flex gap-4 justify-center">
              <Link href="/auth/signin" passHref legacyBehavior>
                <Button asChild>
                  <a
                    onClick={() =>
                      toast.success("Redirecting to sign in...", {
                        description: "Welcome back!",
                      })
                    }
                  >
                    Get Started
                  </a>
                </Button>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <a
                    onClick={() =>
                      toast.info("Learn more about Endeavor", {
                        description: "See what makes us different.",
                      })
                    }
                  >
                    Learn More
                  </a>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Toaster position="bottom-right" />
    </>
  );
}
