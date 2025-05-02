import localFont from "next/font/local";
import "@/styles/globals.css";
import Link from "next/link";
import Footer from "@/components/site/footer";
import Header from "@/components/site/header";

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
  title: 'Your Site Name',
  description: 'Your site description for Google ranking.',
  keywords: 'your,keywords,here',
  authors: [{ name: 'Your Name', url: 'https://yourdomain.com' }],
  openGraph: {
    title: 'Your Site Name',
    description: 'Your site description for social media.',
    url: 'https://yourdomain.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Site Name',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitter',
    creator: '@yourtwitter',
    title: 'Your Site Name',
    description: 'Your site description for Twitter.',
    images: ['https://yourdomain.com/og-image.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main className="container mx-auto px-4 py-0">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
