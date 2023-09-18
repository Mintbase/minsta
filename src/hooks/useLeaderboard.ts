"use client"

import { isUndefined } from "lodash";
import { useMemo } from "react";
import { useWallet } from "@mintbase-js/react";
import { constants } from "@/constants";
import { useApp } from "@/providers/app";
import { gql, useQuery } from "@apollo/client";

const FetchLeaderboard = gql`
  query FetchLeaderboard($contractAddress: String) @cached {
    token: mb_views_nft_tokens(
      where: { nft_contract_id: { _eq: $contractAddress } }
    ) {
      ownerId: owner
    }
  }
`;


export const useLeaderBoardData = () => {

 const { data, loading } = useQuery(FetchLeaderboard, {
    variables: {
      contractAddress: constants.tokenContractAddress,
    },
  });

  const texts = JSON.parse((process.env.NEXT_PUBLIC_MINSTA_TEXTS as string) || "{}");

  const { activeAccountId } = useWallet();

  const { openModal } = useApp();

  const leaderboard = useMemo(() => {
    if (loading) return [];
    const accounts = data.token;

    const leaderboardResult = accounts.reduce(
      (acc: Record<string, number>, token: any) => {
        const { ownerId } = token;

        const notExist = isUndefined(acc[ownerId]) || isNaN(acc[ownerId]);

        if (notExist) {
          acc[ownerId] = 1;
        } else {
          acc[ownerId] = acc[ownerId] + 1;
        }

        return acc;
      },
      {}
    );

    const resultArray = Object.keys(leaderboardResult)
      .map((key) => {
        return {
          count: leaderboardResult[key],
          account: key,
        };
      })
      .sort((a, b) => {
        return b.count - a.count;
      });

    return resultArray;
  }, [data]);


  return {texts, leaderboard, openModal, activeAccountId}

}