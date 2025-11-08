import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Favicon from "./favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imaam.in",
  description:
    "Imaam.in",
  icons: [{ rel: "icon", url: Favicon.src }],
  keywords:
    "Imaam.in, Imaam, Imaam TamilNadu",
  authors: [{ name: "Imaam" }],
  // openGraph: {
  //   title: 'JCI Royals - Junior Chamber International',
  //   description: 'Creating positive change through community service and leadership development',
  //   url: 'https://jciroyals.org',
  //   siteName: 'JCI Royals',
  //   images: [
  //     {
  //       url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'JCI Royals Community Service',
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'JCI Royals - Junior Chamber International',
  //   description: 'Creating positive change through community service and leadership development',
  //   images: ['https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'],
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
