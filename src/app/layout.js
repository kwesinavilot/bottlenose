import localFont from "next/font/local";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Bottlenose',
  description: 'Bottlenose is your AI-powered, multi-agent newsletter and insights platform—named after the inquisitive, highly social bottlenose dolphin.',
  keywords: 'Bottlenose, AI, newsletter, insights, platform',
  authors: [{ name: 'Andrews K. Ankomahene', url: 'https://www.linkedin.com/in/andrewskwesiankomahene/' }],
  openGraph: {
    title: 'Bottlenose',
    description: 'Bottlenose is your AI-powered, multi-agent newsletter and insights platform—named after the inquisitive, highly social bottlenose dolphin.',
    url: 'https://yourdomain.com',
    siteName: 'Bottlenose',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bottlenose',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bottlenose',
    creator: '@bottlenose',
    title: 'Bottlenose',
    description: 'Bottlenose is your AI-powered, multi-agent newsletter and insights platform—named after the inquisitive, highly social bottlenose dolphin.',
    images: ['https://yourdomain.com/og-image.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://bottlenose.com',
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  // If user is authenticated, redirect to /dashboard
  if (session) {
    if (typeof window !== "undefined") {
      window.location.href = "/dashboard";
      return null;
    }
    
    // For SSR/Edge, use a meta refresh as fallback
    return (
      <html>
        <head>
          <meta httpEquiv="refresh" content="0;url=/dashboard" />
        </head>
        <body></body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
