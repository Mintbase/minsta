import { useBlockedNfts } from "@/hooks/useBlockedNfts";
import { FirstTokenProps } from "@/data/types";

import { useFirstToken } from "@/hooks/useFirstToken";
import { useEffect } from "react";

export const useHomePageData = () => {
  const { newToken, tokensFetched, isLoading, tokenError } = useFirstToken();

  const isFirstTokenError = tokenError !== null;

  const { blockedNfts } = useBlockedNfts();

  const firstTokenisBlocked: boolean =
    newToken?.metadata_id && blockedNfts?.includes(newToken?.metadata_id);

  useEffect(() => {
    let reloadTimeout: ReturnType<typeof setTimeout>;

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

  const firstTokenProps: FirstTokenProps = {
    newToken,
    isLoading,
    firstTokenisBlocked,
    isFirstTokenError,
  };

  return {
    firstTokenProps,
    tokensFetched,
    blockedNfts,
  };
};
