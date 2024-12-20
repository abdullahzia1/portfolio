import type { Metadata } from "next";
import "./globals.css";

import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/themeprovider";

import { Analytics } from "@vercel/analytics/react";

const Navbar = dynamic(() => import("../components/navbar/navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/footer"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Abdullah Zia",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="bg-repeat bg-[url(../public/background.png),_url(../public/background.png)] dark:bg-[url(../public/background-invert.png),_url(../public/background-invert.png)] min-h-screen">
            <div className="bg-background/95 flex flex-col gap-32 w-full pt-56 sm:pt-52 items-center">
              {children}
              <Footer />
              {/* <CookiesConsent /> */}
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
