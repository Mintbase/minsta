import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FETCH_FEED, FETCH_FIRST_TOKEN } from "../data/feed.graphl";
import { constants } from "@/constants";

export const REQUEST_HEADERS = {
  "Cache-Control": "public, max-age=31536000, immutable",
  "mb-api-key": "omni-site",
};

export enum REQUEST_METHODS {
  get = "GET",
  post = "POST",
}

export const REQUEST_OPTIONS = (method: REQUEST_METHODS) => {
  return { method: method, headers: REQUEST_HEADERS };
};

export const fetchApi = async <T>(
  url: string,
  method: REQUEST_METHODS
): Promise<T | any> => {
  try {
    const result = await fetch(url, REQUEST_OPTIONS(method));

    if (result) {
      return await result.json();
    }
  } catch (error) {
    console.error(error);
  }
};

export const getBlockedNft = async (): Promise<any> => {
  const fetchUrl = `https://surface-api-z3w7d7dnea-ew.a.run.app/blocked-nfts`;

  return fetchApi(fetchUrl, REQUEST_METHODS.get);
};

const useBlockedNfts = () => {
  const [blockedNfts, setBlockedNfts] = useState<null | string[]>(null);

  const fetchBlockedNfts = async () => {
    const sendRes = await getBlockedNft();

    setBlockedNfts(sendRes);
  };

  useEffect(() => {
    fetchBlockedNfts();
  }, []);


  useEffect(() => {
  const refreshInterval = setInterval(() => {
    fetchBlockedNfts();
  }, 1000);
  return () => clearInterval(refreshInterval);
}, []);

  return { blockedNfts, fetchBlockedNfts};
};

const useFirstToken = (skip: boolean) => {
  const {blockedNfts, fetchBlockedNfts} = useBlockedNfts();

  const {
    data,
    loading,
    refetch: refetchToken,
  } = useQuery<any>(FETCH_FIRST_TOKEN, {
    variables: {
      accountId: constants.proxyContractAddress,
      contractAddress: constants.tokenContractAddress,
    },
    pollInterval: 1000,
  });

  return { newToken: data?.token[0] || null, refetchToken, blockedNfts };
};

const useFeed = (props: any) => {
  const { accountId, contractAddress } = props;

  const [finalData, setDataState] = useState<any>(null);

  const {
    data,
    loading,
    networkStatus,
    refetch: refetchImages,
  } = useQuery<any>(FETCH_FEED, {
    variables: {
      accountId,
      contractAddress,
    },
    pollInterval: 1000, // Poll every minute
  });


  return {
    data: data?.token,
    loading,
    networkStatus,
    refetchImages,
  };
};

export { useFeed, useFirstToken };
