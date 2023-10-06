import { FETCH_FIRST_TOKEN } from "@/data/queries/feed.graphl";
import { useGraphQlQuery } from "@/data/useGraphQlQuery";
import { constants } from "@/constants";
import { useEffect, useState } from "react";

export const useFirstToken: any = () => {
  const [newToken, setNewToken] = useState<any>(null);
  const [tokensFetched, setTokensFetched] = useState<any>(null);

  const queryObj = {
    queryName: "q_FETCH_FIRST_TOKEN",
    query: FETCH_FIRST_TOKEN,
    variables: {
      accountId: constants.proxyContractAddress,
      contractAddress: constants.tokenContractAddress,
    },
    queryOpts: { staleTime: Infinity, refetchInterval: 30000 },
  };

  const { data, isLoading, refetch: refetchToken } = useGraphQlQuery(queryObj);

  useEffect(() => {
    // media delay

    if (tokensFetched && tokensFetched?.length > 1) {
      // window.location.reload();
    }
    // new media aint null
    if (data?.token[0]?.media !== null) {
      // but the newToken previous stored is somehow an async bug so it re-state the new media
      if (newToken?.media == null) {
        setNewToken(data?.token[0]);
      }

      // previous newToken is outdated like new coming media is id 301 and previous token 298
      if (newToken?.id) {
        if (data?.token[0]?.id !== newToken?.id) {

          // if isnt in direct order reload the page to organize the order.
          if (
            Number(data?.token[0]?.id) !== Number(newToken?.id) + 1 &&
            !isLoading
          ) {
            // window.location.reload();
          }
        }
      }
    }

    // first load

    if (
      (data?.token[0] && !newToken) ||
      (data?.token[0] && tokensFetched?.length < 1)
    ) {
      setNewToken(data?.token[0]);
    }

    // check if the newToken coming is the next id.

    if (
      newToken !== null &&
      Number(data?.token[0]?.id) === Number(newToken?.id) + 1 &&
      data?.token[0]?.media
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
      setNewToken(data?.token[0]);
    }
  }, [data?.token, newToken, tokensFetched]);

  return {
    newToken: !isLoading ? newToken : null,
    tokensFetched,
    isLoading,
  };
};
