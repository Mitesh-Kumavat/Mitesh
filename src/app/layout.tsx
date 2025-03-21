import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { keywords } from "@/data/data";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: "Mitesh Kumavat",
  icons: [
    { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
  ],
  keywords: keywords,
  description: "Mitesh Kumavat's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} bg-zinc-900  overflow-hidden mx-auto w-full antialiased  h-screen`}
      >
        <LenisProvider />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
