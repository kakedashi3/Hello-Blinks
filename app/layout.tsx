import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://nick.af`),
  title: {
    default: "Kakedashi",
    template: `%s Hello`,
  },
  description:
    "Hi! I'm Kakedashi",
  openGraph: {
    siteName: "Kakedashi",
    type: "website",
    images: [
      {
        url: "https://ipfs.io/ipfs/QmeB6HaEreVJhNf4iqs18FyPeNS7vQuowYsX4cUYZSgSBA",
        width: 256,
        height: 256,
        alt: "vlsa",
      },
    ],
  },
  twitter: {
    site: `@kakedashi_xyz`,
    creator: `@kakedashi_xyz`,
    card: "summary_large_image",
    images: ["https://ipfs.io/ipfs/QmeB6HaEreVJhNf4iqs18FyPeNS7vQuowYsX4cUYZSgSBA"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}