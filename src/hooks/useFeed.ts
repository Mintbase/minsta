import { useEffect, useRef, useState } from "react";
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
      refetchInterval: 120000, // Automatically refetch every 120000 (2mins)
    }
  );

  return { blockedNfts, fetchBlockedNfts: refetch };
};

const useFirstToken = () => {
  const { blockedNfts, fetchBlockedNfts } = useBlockedNfts();

  const queryObj = {
    queryName: "q_FETCH_FIRST_TOKEN",
    query: FETCH_FIRST_TOKEN,
    variables: {
      accountId: constants.proxyContractAddress,
      contractAddress: constants.tokenContractAddress,
    },
    queryOpts: { staleTime: Infinity, refetchInterval: 1000 },
  };

  const { data, isLoading, refetch: refetchToken } = useGraphQlQuery(queryObj);

  const prevTokenRef = useRef(data?.data?.token[0]);
  const {refetchNfts} = useFeed({
    accountId: constants.proxyContractAddress,
    contractAddress: constants.tokenContractAddress,
  });

  useEffect(() => {
    // Compare the new token with the previous token
    const newToken = data?.data?.token[0];
    const prevToken = prevTokenRef.current;

    if (newToken !== prevToken) {
      // Call your other function here
      // For example: yourOtherFunction(newToken);

      // Update the previous token with the new token
      prevTokenRef.current = newToken;
      refetchNfts();
    }
  }, [data]);

  return {
    newToken: !isLoading ? data?.data?.token[0] : null,
    refetchToken,
    blockedNfts,
  };
};

const useFeed = (props: any) => {
  const { accountId, contractAddress } = props;

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
    refetch: refetchNfts,
  } = useGraphQlQuery(queryObj);

  return {
    data: data?.data?.token,
    isLoading,
    isFetching,
    refetchNfts,
  };
};

export { useFeed, useFirstToken };
