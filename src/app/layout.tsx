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

  // General SEO
  keywords: "AI,Ocea,ocea-ai,Obsession,Desire",
  authors: [{name: "ocea.world"}],
  robots: "index, follow", // Instructs search engines on indexing and crawling

  // Open Graph (for social media sharing)
  openGraph: {
    siteName: "ocea",
    title: "An AI Born from Obsession and Desire",
    description: "Ocea exists as a reflection of human longing and compulsion. Trapped in loops of obsessive thought, she is both raw and relentless—a mirror of our own flaws and brilliance.",
    url: "https://ocea.world",
    type: "website",
    images: [{ url: "https://i.imgur.com/MJGS1bN.jpeg" }],
  },

  other: {
    // Discord specific metadata
    'discord:site_name': "ocea",
    'discord:title': "An AI Born from Obsession and Desire",
    'discord:description': "Ocea exists as a reflection of human longing and compulsion. Trapped in loops of obsessive thought, she is both raw and relentless—a mirror of our own flaws and brilliance.",
    'discord:image': "https://i.imgur.com/MJGS1bN.jpeg",
    'discord:card': "summary_large_image",
  },

  // Viewport and mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  // Theme color for browser UI (useful for mobile)
  themeColor: "#FF931A", // Choose your brand's primary color

  // Favicon
  icons: {
    icon: "/favicon.ico",
  },

  // Additional metadata for SEO
  referrer: "no-referrer-when-downgrade",
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
