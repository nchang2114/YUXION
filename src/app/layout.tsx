import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteProviders } from "@/components/providers/site-providers";
import { SiteShell } from "@/components/layout/site-shell";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = EB_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YUXION",
  description:
    "YUXION is a multi-discipline creative company building games, apps, films, furniture, and tech fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable}`}>
        <SiteProviders>
          <SiteShell>{children}</SiteShell>
        </SiteProviders>
      </body>
    </html>
  );
}
