import { useMemo } from "react";
import { FETCH_FEED, FETCH_FIRST_TOKEN } from "../data/queries/feed.graphl";
import { useGraphQlQuery } from "@/data/useGraphQlQuery";



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
    refetch: refetchNfts,
  } = useGraphQlQuery(queryObj);

  const memoizedData = useMemo(() => {
    const uniqueMetadataIds = new Set<string>();

    const filteredData =  data?.data?.token?.filter((token: any) => {
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
  };
};

export { useFeed };
