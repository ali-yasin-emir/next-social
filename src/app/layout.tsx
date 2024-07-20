import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reactux Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className="flex justify-between px-4 pb-16 pt-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
