"use client";

import { constants } from "@/constants";
import { useApp } from "@/providers/app";
import { useWallet } from "@mintbase-js/react";
import React, { useEffect } from "react";
import ViewYourNfts from "./buttons/ViewYourNft";

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const { isMainModalOpen, closeModal } = useApp();
  const { connect, isConnected, activeAccountId } = useWallet();

  useEffect(() => {
    if (!isMainModalOpen) return;
    // Disable scrolling on the background (body) when the modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isMainModalOpen]);

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  if (!isMainModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 md:p-18 px-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-xl shadow-lg max-w-md mx-auto flex flex-col h-auto"
        onClick={stopPropagation}
      >
        <div className="overflow-y-auto flex-1 bg-white h-auto w-full rounded-lg text-black p-5 max-w-md mx-auto overflow-y-auto flex flex-col">
          <div className="mb-8 flex flex-col gap-2 items-center mt-4">
            <h1 className="text-3xl font-bold">
              {" "}
              <img src="near-apac-logo.svg" width="170" />
            </h1>
          </div>

          <div className="text-black flex flex-col gap-8 items-start mb-12">
            <div className="flex gap-3 items-center">
              <img src="/images/photo_camera-2.svg"></img>
              <p className="text-sm">Take a picture at NEAR APAC</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/images/file_arrow_up.svg"></img>
              <p className="text-sm">Upload and it will mint as an NFT</p>
            </div>
            <div className="flex gap-3 items-center ml-1">
              <img src="/images/trophy.svg"></img>
              <p className="text-sm">Climb up the Leaderboard by minting</p>
            </div>
          </div>

          <div
            className={`mb-14 text-center justify-center ${
              isConnected ? "flex gap-8 mt-8" : ""
            }`}
          >
            <button
              className="gradientButton text-white rounded px-14 py-3 text-sm font-light"
              onClick={!isConnected ? () => connect() : () => closeModal()}
            >
              {"OK"}
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
          100% free to use: no credit card or crypto required!
        </div>
      </div>
    </div>
  );
};

export default Modal;
