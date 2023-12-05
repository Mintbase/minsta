"use client";

import { DynamicGrid } from "./DynamicGrid";
import { FeedScroll } from "./feed/feedscroll";
import { FirstToken } from "./FirstToken";
import { FirstFeed } from "./FirstFeed";
import { useHomePageData } from "@/hooks/useHomePageData";

export const HomePage = () => {
  const { firstTokenProps, tokensFetched, blockedNfts } = useHomePageData();

  return (
      <main className="px-4 lg:px-12 mx-auto flex flex-col items-center justify-center space-y-4 ">
        <DynamicGrid mdCols={2} nColsXl={4} nColsXXl={6}>
          <FirstToken {...firstTokenProps} />
          <FirstFeed tokensFetched={tokensFetched} blockedNfts={blockedNfts} />
          <FeedScroll blockedNfts={blockedNfts} />
        </DynamicGrid>
      </main>
  );
};
