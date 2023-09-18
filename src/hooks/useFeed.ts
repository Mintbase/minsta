import { useEffect, useState } from "react";
import { FETCH_FEED, FETCH_FIRST_TOKEN } from "../data/queries/feed.graphl";
import { constants } from "@/constants";
import { getBlockedNfts } from "@/data/getBlockedNfts";
import { useQuery } from "@tanstack/react-query";
import { useGraphQlQuery } from "@/data/useGraphQlQuery";

const useBlockedNfts = () => {
  const { data: blockedNfts, refetch } = useQuery(
    ["q_getBlockedNfts"],
    () => getBlockedNfts(),
    {
      initialData: null, // Set initial data as null
      refetchInterval: 10000, // Automatically refetch every 1000ms (1 second)
    }
  );

  return { blockedNfts, fetchBlockedNfts: refetch };
};

const useFirstToken = (skip: boolean) => {
  const { blockedNfts, fetchBlockedNfts } = useBlockedNfts();

  const queryObj = {
    queryName: "q_FETCH_FIRST_TOKEN",
    query: FETCH_FIRST_TOKEN,
    variables: {
      accountId: constants.proxyContractAddress,
      contractAddress: constants.tokenContractAddress,
    },
    queryOpts: { staleTime: Infinity , refetchInterval: 1000,},
  };

  const { data, isLoading, refetch: refetchToken } = useGraphQlQuery(queryObj);

  console.log(data, isLoading, 'data')

  return { newToken: !isLoading?  data?.data?.token[0] :  null, refetchToken, blockedNfts };
};

const useFeed = (props: any) => {
  const { accountId, contractAddress } = props;

  const [finalData, setDataState] = useState<any>(null);

  const queryObj = {
    queryName: "q_FETCH_FEED",
    query: FETCH_FEED,
    variables: { accountId, contractAddress },
    queryOpts: { staleTime: Infinity },
  };

  const {
    data,
    isLoading,
    isFetching,
    refetch: refetchImages,
  } = useGraphQlQuery(queryObj);

  console.log(data, 'data tokens')

  return {
    data: data?.data?.token,
    isLoading,
    isFetching,
    refetchImages,
  };
};

export { useFeed, useFirstToken };
