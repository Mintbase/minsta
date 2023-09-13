"use client";

import { constants } from "@/constants";
import { gql, useQuery } from "@apollo/client";
import { isUndefined } from "lodash";
import { useMemo } from "react";
import { useWallet } from "@mintbase-js/react";
import Link from "next/link";
import ViewYourNfts from "@/components/buttons/ViewYourNft";
import RewardsModal from "@/components/RewardsModal";
import { useApp } from "@/providers/app";

const FetchLeaderboard = gql`
  query FetchLeaderboard($contractAddress: String) @cached {
    token: mb_views_nft_tokens(
      where: { nft_contract_id: { _eq: $contractAddress } }
    ) {
      ownerId: owner
    }
  }
`;

export default function Leaderboard() {
  const { data, loading } = useQuery(FetchLeaderboard, {
    variables: {
      contractAddress: constants.tokenContractAddress,
    },
  });

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

  return (
    <main className="pt-20 flex flex-col gap-6 items-center justify-center text-black">
      <div>Leaderboard</div>
      <div className="flex text-center gap-10">
        <ViewYourNfts />
        <button
          className="link-styles text-sm"
          onClick={() => openModal("rewards")}
        >
          View Rewards
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full px-4 pb-24 max-w-3xl">
        {leaderboard?.map(({ account, count }, index) => {
          const isCurrentUser = account === activeAccountId;
          const isFirst = index === 0;
          return (
            <Link
              key={`${account}-${index}`}
              className={`w-full h-16 flex p-4 items-center justify-between rounded-xl bg-[#E8EAF0] ${
                isCurrentUser ? "border-2 border-[#049BE8]" : ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
              passHref
              href={`${constants.mintbaseBaseUrl}/human/${account}/owned/0`}
            >
              <div className="flex">
                {isCurrentUser && (
                  <span role="img" aria-label="silhouette" className="mr-2">
                    👤
                  </span>
                )}
                {isFirst && (
                  <span role="img" aria-label="fire" className="mr-2">
                    🔥
                  </span>
                )}
                <p>{account}</p>
              </div>
              <div className="rounded-full bg-white h-10 w-10 flex items-center justify-center">
                {count}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
