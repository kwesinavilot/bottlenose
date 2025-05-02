"use client";
import Image from "next/image";
import { GalleryVerticalEnd } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export default function AuthLayout({ children }) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start mb-4">
                    <a href="/" className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Endeavor
                    </a>
                </div>
                
                <div className="flex flex-1 items-center justify-center">
                    {children}
                </div>
            </div>

            <div className="relative hidden bg-muted lg:block overflow-hidden h-full">
                <Image
                    src="/images/landing-side.jpg"
                    alt="Welcome to Endeavor"
                    width={480}
                    height={480}
                    className="absolute dark:brightness-[0.2] dark:grayscale h-full inset-0 object-cover w-full"
                    priority
                />
            </div>

            <Toaster position="bottom-right" />
        </div>
    );
}
