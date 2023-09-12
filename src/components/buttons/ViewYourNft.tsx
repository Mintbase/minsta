"use client";
import React from "react";
import Link from "next/link";
import { constants } from "@/constants";
import { useWallet } from "@mintbase-js/react";

const ViewYourNfts = () => {
  const { activeAccountId, isConnected } = useWallet();

  return isConnected ? (
    <div className="flex gap-2 items-center">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        passHref
        href={`${constants.mintbaseBaseUrl}/human/${activeAccountId}/owned/0`}
        className="link-styles text-sm"
      >
        View your NFTs
      </Link>
      <img src="/images/link_arrow.svg" width={18}></img>
    </div>
  ) : null;
};

export default ViewYourNfts;
