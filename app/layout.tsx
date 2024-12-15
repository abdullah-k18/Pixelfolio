import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css"

const PressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Abdullah Bin Altaf - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://e7.pngegg.com/pngimages/114/364/png-clipart-superman-logo-pixel-art-batman-superman-heroes-text-thumbnail.png" type="image/x-icon" />
      </head>
      <body className={PressStart2P.className}>{children}</body>
    </html>
  );
}
