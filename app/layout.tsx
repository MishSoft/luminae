import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import MobileSideBar from './components/ui/sidebar';
import Footer from "./components/layout/Footer";



const geistLato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luminae | Online Shopping Store",
    template: "%s | Luminae"
  },
  description: "Explore Luminae for the exclusive summer collection, premium fashion trends, and unbeatable offers. Shop the best outfits online.",
  keywords: ["e-commerce", "fashion store", "online shopping", "summer collection", "Luminae"],
  authors: [{ name: "Luminae Team" }],
  openGraph: {
    title: "Luminae | Your Fashion Destination",
    description: "Shop the latest trends with exclusive offers.",
    siteName: "Luminae",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminae Store",
    description: "Discover exclusive fashion trends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistLato.variable} h-full antialiased`}
    >
      <body className="">
        <Header />
        <MobileSideBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
