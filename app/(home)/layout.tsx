import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce-Template",
  description: "Try to practice",
};

export default function HomeLayout({
  children,
  cartModal,
  loginmodal,
}: Readonly<{
  children: React.ReactNode;
  cartModal: React.ReactNode;
  loginmodal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {cartModal}
        {loginmodal}
        {children}
        <Footer />
      </body>
    </html>
  );
}
