import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  openGraph: {
    type: "website",
    url: profile.url,
    title: `${profile.name} — ${profile.headline}`,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`,
    locale: "en_IN",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: `${profile.name} — Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.tagline,
    images: ["/profile.jpg"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
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
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.telegram],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
