import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import { normalizeMetaDescription } from "@/lib/metadata";
import "./globals.css";

// Self-hosted latin subsets of the brand typefaces: Funnel Sans for headings, Cormorant Garamond for body text.
const funnel = localFont({
  src: [
    { path: "./fonts/funnel.woff2", weight: "300 800", style: "normal" },
    { path: "./fonts/funnel-italic.woff2", weight: "300 800", style: "italic" },
  ],
  variable: "--font-funnel",
  display: "swap",
});

const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/cormorant-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

// Every page is rendered on the server for each request.
export const dynamic = "force-dynamic";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#29324D",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Somalia Expert Witness UK | Asylum Reports",
    template: "%s | Somalia Expert",
  },
  description: normalizeMetaDescription(
    "Find a qualified Somalia expert witness in the UK. Country condition reports for FTT and UT asylum appeals. SLAB and LAA Legal Aid compatible."
  ),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    siteName: "Somalia Expert",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Somalia Expert" }],
  },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "en-GB": `${SITE_URL}/`,
      "x-default": `${SITE_URL}/`,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${funnel.variable} ${cormorant.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
