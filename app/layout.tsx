"use client";
import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from "./components/navBar/navBar";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";

const satoshi = localFont({
  src: './Satoshi-Variable.woff2',
  display: 'swap',
})

// eslint-disable-next-line @next/next/no-async-client-component
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={cn("antialiased bg-[#121212] text-white h-[6000px]", satoshi.className)}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
