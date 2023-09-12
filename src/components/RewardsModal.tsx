"use client";

import { constants } from "@/contants";
import { useApp } from "@/providers/app";
import { useWallet } from "@mintbase-js/react";
import React, { useEffect } from "react";

const RewardsModal = ({ children }: { children?: React.ReactNode }) => {
  const { isRewardsModalOpen, closeModal } = useApp();
  const { connect, isConnected, activeAccountId } = useWallet();

  useEffect(() => {
    if (!isRewardsModalOpen) return;
    // Disable scrolling on the background (body) when the modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isRewardsModalOpen]);

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  if (!isRewardsModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 md:p-18 px-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-xl shadow-lg max-w-md mx-auto flex flex-col h-auto"
        onClick={stopPropagation}
      >
        <div className="overflow-y-auto flex-1 bg-white h-full w-full rounded-lg text-black p-5 max-w-md mx-auto overflow-y-auto flex flex-col">
          <div className="mb-8 flex flex-col gap-2 items-center mt-4">
            <h1 className="text-3xl font-bold">{"Rewards"}</h1>
          </div>

          <div className="text-black flex flex-col gap-6 items-start mb-20">
            <div className="gap-3 items-center">
              <span className="font-bold">10N</span>
              <p className="text-sm">Top 10 on the Leaderboard</p>
            </div>
            <div className="gap-3 items-center">
              <span className="font-bold">5N</span>
              <p className="text-sm">Top 11-20 on the Leaderboard</p>
            </div>
            <div className="gap-3 items-center ml-1">
              <span className="font-bold">5N</span>
              <p className="text-sm">
                Most liked tweet with the hashtag{" "}
                <strong>#NEARAPAC</strong>
              </p>
            </div>
          </div>

          <div className="mb-14 text-center">
            <button
              className="gradientButton text-white rounded px-14 py-3 text-sm font-light"
              onClick={() => closeModal()}
            >
              {"Ok"}
            </button>
          </div>

          <div>
            <p className="uppercase text-xs mb-1.5 text-center">POWERED BY</p>
            <div className="flex justify-center gap-5">
              <img src="/images/MB_logo.svg"></img>
              <img src="/images/near_logo.svg"></img>
            </div>
          </div>
        </div>

        <div className="w-full text-[#0A7D6C] bg-[#0A7D6C]/10 text-center py-2 text-sm px-5">
          100% free to use: no creditcard or crypto required!
        </div>
      </div>
    </div>
  );
};

export default RewardsModal;
