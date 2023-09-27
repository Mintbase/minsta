"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useFeed, useFirstToken } from "@/hooks/useFeed";
import { DynamicGrid } from "@/components/DynamicGrid";
import { useEffect, useRef, useState } from "react";
import { constants } from "@/constants";
import Link from "next/link";

import { getCachedImage } from "@/utils/cachedImage";
import Image from "next/image";

const ImageThumb = ({ token, index }: any) => {
  const cachedImage = getCachedImage(token?.media) as string;

  return !!token?.media ? (
    <Link
      key={`${token?.metadata_id}-${index}`}
      href={`${constants.mintbaseBaseUrl}/meta/${token?.metadata_id}`}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <div className="w-80 h-80 relative">
        <div className="absolute inset-0 flex items-center justify-center flex items-center justify-center">
          <Image
            src={cachedImage}
            alt={`Token ${index}`}
            className="object-cover h-full w-full"
            width="320"
            height="320"
            quality={90}
            priority={index < 5}
            placeholder="blur"
            blurDataURL={cachedImage}
            unoptimized
          />
        </div>
        <button
          className="absolute top-3 right-3 bg-black text-white rounded p-1 text-xs px-2 py-1.5"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              `https://twitter.com/intent/tweet?url=${constants.mintbaseBaseUrl}/meta/${token?.metadata_id}%2F&via=mintbase&text=`,
              "_blank"
            );
          }}
        >
          Share
        </button>
      </div>
    </Link>
  ): null;
};

export const HomePage = () => {
  const [items, setItems] = useState<any>(null);

  const searchParams = useSearchParams();

  const hasAccountID = searchParams.get("account_id");
  const { push } = useRouter();

  // if(hasAccountID) push('/camera')

  const { isLoading, isFetching, data } = useFeed({
    accountId: constants.proxyContractAddress,
    contractAddress: constants.tokenContractAddress,
  });

  const isReady = !isFetching;
  // if (isReady && data[0]?.media && !items) {
  //   setItems(data);
  // }

  const lists = Array.from(Array(23).keys());

  const { newToken, refetchToken, blockedNfts } = useFirstToken();
  // Create refs to keep track of previous values
  const prevNewToken = useRef(newToken);
  const prevData = useRef(data);

  useEffect(() => {
    // Check if both newToken and data are different from their previous values
    if (newToken !== prevNewToken.current && data !== prevData.current) {
      // Both newToken and data have changed, update the UI or take action here

      // Update the refs to store the current values
      prevNewToken.current = newToken;
      prevData.current = data;
    }
  }, [newToken, data]);

  const blockedMedia = blockedNfts as string[];

  const firstTokenisBlocked =
    newToken?.metadata_id && blockedNfts?.includes(newToken?.metadata_id);

    // return null

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
            <ImageThumb key={1} token={newToken} index={1} />
          ) : null}

          {!items && isLoading
            ? lists?.map((listItem) => {
                return (
                  <div
                    className="aspect-square rounded overflow-x-hidden cursor-pointer storeImg"
                    key={listItem} // Use a unique key here, like listItem
                  >
                    <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
                  </div>
                );
              })
            : data?.map((token: any, index: number) => {
                if (
                  !!blockedMedia &&
                  blockedMedia.includes(token?.metadata_id)
                ) {
                  return null;
                }

                return <ImageThumb key={index} token={token} index={index} />;
              })}
        </DynamicGrid>
      </main>
    </>
  );
};
