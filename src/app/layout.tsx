"use client";
import Header from "@/components/header";
import "./globals.css";
import "@near-wallet-selector/modal-ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Providers from "@/providers/providers";
import Navigation from "@/components/navigation";
import Modal from "@/components/modal";
import RewardsModal from "@/components/RewardsModal";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DD269D0DWF" />
      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DD269D0DWF');
        `}
      </Script>
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center justify-between`}
      >
        <div className="flex flex-col min-h-screen relative bg-[#FFFFFF] w-screen">
          <Providers>
            <Navigation>
              <Header />
              <Footer />
            </Navigation>

            {children}

            <Modal></Modal>
            <RewardsModal />
          </Providers>
        </div>
      </body>
    </html>
  );
}
