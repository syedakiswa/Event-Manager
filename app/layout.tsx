import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConnectSphere - Premier Networking & Event Platform",
  description: "Connect with industry leaders, talented speakers, and professionals at ConnectSphere. Join our events, expand your network, and build meaningful relationships that drive success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
