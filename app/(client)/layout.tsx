import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from 'next/font/local';
import { Providers } from "../providers";

// const raleway = localFont({
//   src: "../fonts/Raleway.woff2",
//   variable: '--font-raleway',
//   weight: "100 900"
// })

// const akaya = localFont({
//   src: './fonts/Akaya.woff2',
//   variable: '--font-kaya',
//   weight: '100 900'
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const winkySans = localFont({
  src: "../fonts/WinkySans.ttf",
  // display: "swap",
  variable: "--font-winky-sans",
  weight: '100 900'
});

export const metadata: Metadata = {
  title: "Evolve Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`${winkySans.variable} ${winkySans.variable} antialiased`}
        >
          <Providers>
          <Header />
          {children}
          <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
