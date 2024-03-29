import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const siteConfig = {
  name: "Taskify",
  description: "Collaborate, manage projects, and reach new productivity peaks",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
      type: "image/svg+xml",
      sizes: "512x512",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
