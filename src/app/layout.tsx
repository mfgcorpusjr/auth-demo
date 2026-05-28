import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/common/Navbar";
import Container from "@/components/common/Container";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Auth Demo",
    template: "%s | Auth Demo",
  },
  description:
    "A simple and secure Next.js authentication demo app showcasing modern signin, signup, and user session management with clean UI and best practices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <Container className="flex-1 flex flex-col py-16">{children}</Container>

        <Toaster />
      </body>
    </html>
  );
}
