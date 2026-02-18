import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

const alexandria = Alexandria({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "soumteck",
  description: "soumteck for auctions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${alexandria.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
