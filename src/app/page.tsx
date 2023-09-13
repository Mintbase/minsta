import { HomePage } from "@/components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    title: "Mint Moments on NEAR APAC",
    description: "Share your best moments on NEAR APAC and win prizes!",
    siteId: "1467726470533754880",
    creator: "Mintbase",
    images: "./images/APAC-thumbnail-1200x630.png",
  },
};

export default function Home() {
  return <HomePage />;
}
