import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VEYMAQ",
  description: "VEYMAQ - Vehículos y Maquinaria.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "VEYMAQ",
    description: "VEYMAQ - Vehículos y Maquinaria.",
    url: "https://www.veymaq.com",
    siteName: "VEYMAQ",
    locale: "es-ES",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/images/veymaq.jpg" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/images/veymaq.jpg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="VEYMAQ - Vehículos y Maquinaria." />
        <meta name="keywords" content="VEYMAQ, Vehículos, Maquinaria, Servicios, Taller, Coches" />
        <meta name="author" content="VEYMAQ" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="VEYMAQ" />
        <meta property="og:description" content="VEYMAQ - Vehículos y Maquinaria." />
        <meta property="og:image" content="/images/veymaq.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VEYMAQ" />
        <meta property="og:locale" content="es_ES" />
      </head>   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <Analytics />
      </body>
    </html>
  );
}
