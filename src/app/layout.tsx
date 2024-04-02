import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "可知 - 让医学一目了然",
  description: "可知 - 让医学一目了然",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>{children}</body>
    </html>
  );
}
