import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fashion Trending 2026",
  description: "Fashion e-commerce application with trending items",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
