import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} — ${profile.headline}. ${profile.tagline}`,
  keywords: [
    "Harsh Upadhyay",
    "Dev-Harshupadhyay",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Python Developer",
    "BCA Student Developer",
    "Faridabad Haryana India",
    "Chhath Geet",
    "Cinevood",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: profile.url,
    title: `${profile.name} — ${profile.headline}`,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`,
    locale: "en_IN",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Full-Stack Web Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.tagline,
    images: ["/og-cover.png"],
    creator: `@${profile.handle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "53WBArQlkEUTLpRWKgLb7HZCtV1HjpR8KurWFVcbKq4",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#050507" }],
  width: "device-width",
  initialScale: 1,
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.preferredName,
  url: profile.url,
  email: profile.email,
  image: `${profile.url}/profile.jpg`,
  jobTitle: profile.roles[0],
  description: profile.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Tailwind CSS",
    "REST APIs",
    "Automation",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${profile.name} Portfolio`,
  alternateName: profile.name,
  url: profile.url,
  description: `${profile.name} — ${profile.headline}. ${profile.tagline}`,
  inLanguage: "en-IN",
  author: {
    "@type": "Person",
    name: profile.name,
    url: profile.socials.github,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${mono.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        {children}
      </body>
    </html>
  );
}
