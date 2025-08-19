import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PerformanceInitializer } from "@/components/ui/performance-initializer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Pine Ink Tattoo - Custom Tattoos & Professional Artists",
  description: "Pine Ink Tattoo studio offers custom tattoo designs, professional artists, and exceptional service. Book your consultation today for stunning, personalized tattoo art.",
  keywords: "tattoo, custom tattoos, tattoo artists, tattoo studio, body art, ink, tattoo designs",
  authors: [{ name: "Pine Ink Tattoo" }],
  creator: "Pine Ink Tattoo",
  publisher: "Pine Ink Tattoo",
  openGraph: {
    title: "Pine Ink Tattoo - Custom Tattoos & Professional Artists",
    description: "Pine Ink Tattoo studio offers custom tattoo designs, professional artists, and exceptional service.",
    type: "website",
    locale: "en_US",
    siteName: "Pine Ink Tattoo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pine Ink Tattoo - Custom Tattoos & Professional Artists",
    description: "Pine Ink Tattoo studio offers custom tattoo designs, professional artists, and exceptional service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  // Performance optimizations
  other: {
    "X-DNS-Prefetch-Control": "on",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "origin-when-cross-origin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/pineinktattoos/shop/hero-tatto-pic.png" as="image" />
        <link rel="preload" href="/images/pineinktattoos/artists/damon.jpg" as="image" />
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime, 'ms');
                    }
                  }
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <PerformanceInitializer />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
