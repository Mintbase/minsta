import { FETCH_FEED } from "@/data/queries/feed.graphl";
import useInfiniteScrollGQL from "@/hooks/useInfiniteScroll";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { MemoizedImageThumb } from "./ImageThumb";

export const FeedScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const { items, loadingItems, total, error } = useInfiniteScrollGQL(
    "q_FETCH_FEED",
    isVisible,
    { query: FETCH_FEED }
  );

  console.log(items, "datafinal");
  console.log(loadingItems, "loadingItems");

  console.log(isVisible, 'ISVISIBLE')

  if (error) {
    return <> Error.</>;
  }

  return (
    <>
      {items?.map((token: any, index: number) => {
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
      })}
  <div      ref={ref} >
      {loadingItems?.map((item, i) => (
        <div
          className="aspect-square rounded overflow-x-hidden cursor-pointer storeImg"
          key={`${item}-${i}`}
      
        >
          <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800"/>
        </div>
      ))}
      </div>
    </>
  );
};
