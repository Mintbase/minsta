"use client";

import { constants } from "@/constants";
import { useFeed, useFirstToken } from "@/hooks/useFeed";
import React, { useMemo } from "react";
import { DynamicGrid } from "../DynamicGrid";
import { MemoizedImageThumb } from "./ImageThumb";

const lists = Array.from(Array(23).keys());

export const Feed = () => {
  const { isLoading, data } = useFeed({
    accountId: constants.proxyContractAddress,
    contractAddress: constants.tokenContractAddress,
  });

//   const { newToken, blockedNfts } = useFirstToken();

//   const blockedMedia = blockedNfts as string[];

//   const firstTokenisBlocked =
//     newToken?.metadata_id && blockedNfts?.includes(newToken?.metadata_id);

  const memoizedData = useMemo(() => {
    const uniqueMetadataIds = new Set<string>();

    const filteredData = data?.filter((token: any) => {
      if (uniqueMetadataIds.has(token.metadata_id)) {
        return false;
      }

      uniqueMetadataIds.add(token.metadata_id);

      return true;
    });

    return filteredData;
  }, [data]);

  console.log(memoizedData, "data");
  return (
    <>
      <main className="px-4 lg:px-12 mx-auto flex flex-col items-center justify-center space-y-4">
        <DynamicGrid mdCols={2} nColsXl={4} nColsXXl={6}>
          {/* {!newToken?.media ? (
            <div
              className="aspect-square rounded overflow-x-hidden cursor-pointer storeImg"
              key={1}
            >
              <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
            </div>
          ) : !firstTokenisBlocked ||
            typeof firstTokenisBlocked == "undefined" ? (
            <MemoizedImageThumb
              key={`${newToken?.metadata_id}-${newToken?.owner}`}
              token={newToken}
              index={1}
            />
          ) : null} */}

          {!data && isLoading
            ? lists?.map((listItem) => {
                return (
                  <div
                    className="aspect-square rounded overflow-x-hidden cursor-pointer storeImg"
                    key={listItem}
                  >
                    <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
                  </div>
                );
              })
            : memoizedData?.map((token: any, index: number) => {
                // if (
                //   !!blockedMedia &&
                //   blockedMedia.includes(token?.metadata_id)
                // ) {
                //   return null;
                // }

                return (
                  <MemoizedImageThumb
                    key={`${token?.metadata_id}-${token?.owner}`}
                    token={token}
                    index={index}
                  />
                );
              })}
        </DynamicGrid>
      </main>
    </>
  );
};

export const HomeComponent = () => {
  return <Feed />;
};

export const MemoizedFeed = React.memo(Feed);
