import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";

// Load Inter Font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Load Poppins Font
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'], // Specify the font weights you need
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ocea-AI",
  description: "An AI Born from Obsession and Desire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
