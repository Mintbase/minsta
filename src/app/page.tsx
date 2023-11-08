import { HomePage } from "@/components/HomePage";
import { MINSTA_META } from "@/data/fallback";
import { getBlockedNfts } from "@/data/getBlockedNfts";
import { Metadata } from "next";

const getData = async (): Promise<string[]> => {
  const blockedNfts = await getBlockedNfts();

  return blockedNfts;
};

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_META_TITLE} - ${process.env.NEXT_PUBLIC_META_DESCRIPTION} `,
  openGraph: {
    title: process.env.NEXT_PUBLIC_META_TITLE ?? MINSTA_META.title,
    description:
      process.env.NEXT_PUBLIC_META_DESCRIPTION ?? MINSTA_META.description,
    images: [
      {
        type: "image/png",
        url: process.env.NEXT_PUBLIC_META_IMAGE ?? MINSTA_META.image,
        width: "1200",
        height: "630",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_META_TITLE ?? MINSTA_META.title,
    description:
      process.env.NEXT_PUBLIC_META_DESCRIPTION ?? MINSTA_META.description,
    siteId: "1467726470533754880",
    creator: "Mintbase",
    images: process.env.NEXT_PUBLIC_META_IMAGE ?? MINSTA_META.image,
  },
  description:
    process.env.NEXT_PUBLIC_META_DESCRIPTION ?? MINSTA_META.description,
};

export default async function Home() {
  // fetch the blocklist server side at first load
  const blockList = await getData();

  return <HomePage blckd={blockList} />;
}
