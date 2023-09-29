"use client";

import { constants } from "@/constants";
import ViewYourNfts from "../buttons/ViewYourNft";
import RewardsModal from "../RewardsModal";
import { useLeaderBoardData } from "@/hooks/useLeaderboard";
import Link from "next/link";

export const LeaderboardPage = () => {
  const { openModal, leaderboard, activeAccountId, texts } =
    useLeaderBoardData();

  return (
    <>
      <main className="pt-20 flex flex-col gap-6 items-center justify-center text-mainText">
        <div>Leaderboard</div>
        <div className="flex text-center gap-10">
          <ViewYourNfts />
          {constants.showRewards ? (
            <button
              className="text-linkColor text-sm"
              onClick={() => openModal("rewards")}
            >
              View Rewards
            </button>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 w-full px-4 pb-24 max-w-3xl text-leaderboardText">
          {leaderboard?.map(({ account, count }, index) => {
            const isCurrentUser = account === activeAccountId;
            const isFirst = index === 0;
            return (
              <Link
                key={`${account}-${index}`}
                className={`w-full h-16 flex p-4 items-center justify-between rounded-xl bg-cardOne ${
                  isCurrentUser ? "border-2 border-cardTwo" : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
                passHref
                href={`${constants.mintbaseBaseUrl}/human/${account}/owned/0`}
              >
                <div className="flex w-5/6 md:w-full">
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
                  <p className="w-full truncate">{account}</p>
                </div>
                <div>
                  <div className="rounded-full bg-mainBg text-leaderboardText h-10 w-10 flex items-center justify-center">
                    {count}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <RewardsModal texts={texts} />
    </>
  );
};
