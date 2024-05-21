import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { plPL } from "@clerk/localizations";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APP - AS",
  description: "APP - AS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={plPL}>
      <html lang='en'>
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
