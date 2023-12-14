/*

    FirstFeed.tsx
        this component was made to the exclusive use-case where the first token load, tries to load more then
        1 token at once. It happens when multiple users are minting at same time.

*/

import { TokenData } from "@/data/types";
import { MemoizedImageThumb } from "./feed/ImageThumb";

interface FirstFeed {
  tokensFetched: TokenData[] | null;
  blockedNfts: string[] | undefined;
}

export const FirstFeed = ({
  tokensFetched,
  blockedNfts,
}: FirstFeed): JSX.Element | null => {
  if (!tokensFetched) return null;

  const filteredTokens = tokensFetched.filter((token: TokenData) => {
    // Filter out tokens that match blockedNfts
    return !blockedNfts?.includes(token?.metadata_id);
  });

  return (
    <>
      {filteredTokens.map((token: TokenData, index: number) => (
        <MemoizedImageThumb
          key={token?.metadata_id}
          token={token}
          index={index}
        />
      ))}
    </>
  );
};
