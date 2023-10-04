"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useFeed } from "@/hooks/useFeed";
import { DynamicGrid } from "@/components/DynamicGrid";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { constants } from "@/constants";
import Link from "next/link";

import Image from "next/image";
import { ImageCacheProvider, useImageCache } from "@/data/ImageCacheContext";
import { useFirstToken } from "@/hooks/useFirstToken";
import { FeedScroll } from "./feed/feedscroll";
import { MemoizedImageThumb } from "./feed/ImageThumb";

function transformArweaveToNextJsImage(arweaveUrl: string) {
  // Get the dynamic base URL of your Next.js application
  const nextJsBaseUrl = window.location.origin;

  // Encode the Arweave URL for the 'url' query parameter
  const encodedArweaveUrl = encodeURIComponent(arweaveUrl);

  // Build the Next.js image URL with query parameters
  const nextJsImageUrl = `${nextJsBaseUrl}/_next/image?url=${encodedArweaveUrl}&w=640&q=90`;

  return nextJsImageUrl;
}


const TokensFeed = () => {
  const lists = Array.from(Array(23).keys());

  const { isLoading, isFetching, data } = useFeed({
    accountId: constants.proxyContractAddress,
    contractAddress: constants.tokenContractAddress,
  });

  if (!data && isLoading) {
    return lists?.map((listItem) => {
      return (
        <div
          className="aspect-square rounded overflow-x-hidden cursor-pointer storeImg"
          key={listItem}
        >
          <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
        </div>
      );
    });
  }
  return data?.map((token: any, index: number) => {
    // if (
    //   !!blockedMedia &&
    //   blockedMedia.includes(token?.metadata_id)
    // ) {
    //   return null;
    // }

    return (
      <MemoizedImageThumb
        key={token?.metadata_id}
        token={token}
        index={index}
      />
    );
  });
};


export const HomeComponent = () => {
  return (
    <ImageCacheProvider>
      <HomePage />
    </ImageCacheProvider>
  );
};

export const HomePage = () => {
  const { newToken, refetchToken, blockedNfts, tokensFetched } =
    useFirstToken();

  const firstTokenisBlocked =
    newToken?.metadata_id && blockedNfts?.includes(newToken?.metadata_id);

  return (
    <>
      <main className="px-4 lg:px-12 mx-auto flex flex-col items-center justify-center space-y-4">
        <DynamicGrid mdCols={2} nColsXl={4} nColsXXl={6}>
          {!newToken?.media ? (
            <div
              className="aspect-square rounded overflow-x-hidden cursor-pointer storeImg"
              key={1}
            >
              <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
            </div>
          ) : !firstTokenisBlocked ||
            typeof firstTokenisBlocked == "undefined" ? (
            <MemoizedImageThumb key={newToken?.media} token={newToken} index={1} />
          ) : null}

          {tokensFetched?.length > 0 &&
            tokensFetched.map((token: any, index: number) => {
              return (
                <MemoizedImageThumb
                  key={token?.metadata_id}
                  token={token}
                  index={index}
                />
              );
            })}

          <FeedScroll />
        </DynamicGrid>
      </main>
    </>
  );
};
