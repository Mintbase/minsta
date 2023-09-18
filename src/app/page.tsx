import { HomePage } from "@/components/HomePage";
import { MINSTA_META } from "@/data/fallback";
import { Metadata } from "next";

const envMeta = JSON.parse(process.env.NEXT_PUBLIC_MINSTA_META as string) || MINSTA_META

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    title: envMeta.title,
    description: envMeta.description,
    siteId: "1467726470533754880",
    creator: "Mintbase",
    images: envMeta.images,
  },
};

export default function Home() {
  return <HomePage />;
}
