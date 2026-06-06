import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/data/content";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — AI Engineer & ML Researcher`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Murtuja Kayes",
    "AI Engineer",
    "Machine Learning Researcher",
    "Applied Mathematics",
    "Deep Learning",
    "Signal Processing",
    "Healthcare AI",
    "ML Engineer",
    "Data Science",
    "Alfa Center",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — AI Engineer & ML Researcher`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — AI Engineer & ML Researcher`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Engineer & ML Researcher`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "AI Engineer & ML Researcher",
  worksFor: { "@type": "Organization", name: site.company },
  email: site.email,
  alumniOf: "Applied Mathematics",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Applied Mathematics",
    "Signal Processing",
    "Healthcare AI",
    "Data Science",
  ],
  sameAs: [
    "https://github.com/murtuja43",
    "https://www.linkedin.com/in/murtuja-kayes/",
    "https://www.youtube.com/@BeginnerBitsHQ",
    "https://www.instagram.com/murtujakayes/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-bg-elev2 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
