import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./tailwind.css";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Engineering Portfolio",
  description:
    "High-performance frontend architecture, UI engineering, and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
