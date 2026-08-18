import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import GlobalChrome from "@/components/GlobalChrome";

export const metadata: Metadata = {
  title: "Harsh Upadhyay — Full Stack Web Developer",
  description:
    "Portfolio of Harsh Upadhyay, a BCA 1st semester student and self-taught full stack web developer building clean, modern web experiences.",
  metadataBase: new URL("https://harsh.dev"),
  openGraph: {
    title: "Harsh Upadhyay — Full Stack Web Developer",
    description:
      "Portfolio of Harsh Upadhyay, a BCA 1st semester student and self-taught full stack web developer.",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <GlobalChrome />
        </Providers>
      </body>
    </html>
  );
}
