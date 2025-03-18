import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FEJA-SHOP",
  description:
    "FEJA-SHOP is a modern online store offering a diverse range of quality products. Built with Next.js, our platform features intuitive navigation, advanced search and filtering, and a fully responsive design to ensure a seamless shopping experience on any device.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <SearchBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
