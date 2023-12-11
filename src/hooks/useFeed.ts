import { useMemo } from "react";
import { FETCH_FEED } from "../data/queries/feed.graphl";
import { useGraphQlQuery } from "@/data/useGraphQlQuery";
import { TokenData, TokenFeedData } from "@/data/types";



const useFeed = (props: any) => {
  const { accountId, contractAddress } = props;

  const queryObj = {
    queryName: "q_FETCH_FEED",
    query: FETCH_FEED,
    variables: { accountId, contractAddress, limit: 11, offset: 1 },
    queryOpts: { staleTime: Infinity },
  };

  const {
    data,
    isLoading,
    isFetching,
    error,
    refetch: refetchNfts,
  } = useGraphQlQuery<TokenFeedData>(queryObj);

  const memoizedData = useMemo(() => {
    const uniqueMetadataIds = new Set<string>();

    const filteredData =  data?.token?.filter((token: TokenData) => {
      if (uniqueMetadataIds.has(token.metadata_id)) {
        return false;
      }

      uniqueMetadataIds.add(token.metadata_id);

      return true;
    });

    return filteredData;
  }, [data]);

  return {
    data: memoizedData,
    isLoading,
    isFetching,
    refetchNfts,
    tokenFeedError: error
  };
};

export { useFeed };
