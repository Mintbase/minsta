import { FETCH_FIRST_TOKEN } from "@/data/queries/feed.graphl";
import { useBlockedNfts } from "./useBlockedNfts";
import { useGraphQlQuery } from "@/data/useGraphQlQuery";
import { constants } from "@/constants";
import { useState } from "react";

export const useFirstToken: any = () => {
  const { blockedNfts, fetchBlockedNfts } = useBlockedNfts();

  const [newToken, setNewToken] = useState<any>(null);
  const [tokensFetched, setTokensFetched] = useState<any>(null);

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

  // first load

  if (data?.data?.token && !newToken) {
    setNewToken(data?.data?.token[0]);
  }

  // check if the newToken coming is the next id.

  if (
    newToken !== null &&
    Number(data?.data?.token[0].id) === Number(newToken?.id) + 1 &&
    data?.data?.token[0].media
  ) {
    let newTokensFetched = null;

    if (!tokensFetched) {
      newTokensFetched = [newToken];
    }

    if (tokensFetched?.length == 1) {
      newTokensFetched = [newToken, tokensFetched];
    }
    if (tokensFetched?.length > 1) {
      newTokensFetched = [newToken, ...tokensFetched];
    }

    setTokensFetched(newTokensFetched);
    setNewToken(data?.data?.token[0]);
  }

  console.log(
    data?.data?.token[0].id,
    newToken?.id,
    Number(newToken?.id) + 1,
    newToken !== null &&
      Number(data?.data?.token[0].id) === Number(newToken?.id) + 1,
    "NEWtoken"
  );
  console.log(tokensFetched, newToken, "NEWtoken");

  return {
    newToken: !isLoading ? newToken : null,
    refetchToken,
    tokensFetched,
    blockedNfts,
  };
};
