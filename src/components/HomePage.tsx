"use client";

import { DynamicGrid } from "@/components/DynamicGrid";
import React, { useEffect } from "react";

import { useFirstToken } from "@/hooks/useFirstToken";
import { FeedScroll } from "./feed/feedscroll";
import { MemoizedImageThumb } from "./feed/ImageThumb";
import { useBlockedNfts } from "@/hooks/useBlockedNfts";

export const HomePage = () => {
  const { newToken, tokensFetched, isLoading } = useFirstToken();

  const { blockedNfts } = useBlockedNfts();

  const firstTokenisBlocked =
    newToken?.metadata_id && blockedNfts?.includes(newToken?.metadata_id);

  useEffect(() => {
    let reloadTimeout: any;

    if (!newToken?.media) {
      reloadTimeout = setTimeout(() => {
        // Reload the page after 4 minutes (120,000 milliseconds)
        window.location.reload();
      }, 360000); //4 minutes in milliseconds
    }

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(reloadTimeout);
    };
  }, [newToken]);

  return (
    <>
      <main className="px-4 lg:px-12 mx-auto flex flex-col items-center justify-center space-y-4 ">
        <DynamicGrid mdCols={2} nColsXl={4} nColsXXl={6}>
          {!newToken?.media || isLoading ? (
            <div
              className="md:aspect-square rounded overflow-x-hidden cursor-pointer sm:w-full md:w-72 h-72 xl:w-80 xl:h-80 relative"
              key={1}
            >
              <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
            </div>
          ) : !firstTokenisBlocked ||
            typeof firstTokenisBlocked == "undefined" ? (
            <MemoizedImageThumb
              key={newToken?.media}
              token={newToken}
              index={1}
            />
          ) : null}

          {tokensFetched?.length > 0 &&
            tokensFetched.map((token: any, index: number) => {
              if (!!blockedNfts && blockedNfts.includes(token?.metadata_id)) {
                return null;
              }

              return (
                <MemoizedImageThumb
                  key={token?.metadata_id}
                  token={token}
                  index={index}
                />
              );
            })}

          <FeedScroll blockedNfts={blockedNfts} />
        </DynamicGrid>
      </main>
    </>
  );
};
