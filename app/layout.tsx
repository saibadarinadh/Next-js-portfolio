import type { Metadata } from "next";
import { Inter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/Navbar";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'], // Specify subsets if available
  weight: ['400', '700', '800'], // Specify desired font weights
  variable: '--font-hanken-grotesk', // CSS variable for the font
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[#f0f0f0] antialiased select-none ${hankenGrotesk.className}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
