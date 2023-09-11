"use client";
import { constants } from "@/contants";
import { useApp } from "@/providers/app";
import { useWallet } from "@mintbase-js/react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const { isConnected } = useWallet();
  const { push } = useRouter();
  const { openModal } = useApp();

  const headerButtonsNotHome = (onClick: any) => (
    <div className="flex w-full justify-between px-4 items-center">
      <button className="h-8 w-8" onClick={onClick}>
        <img src="/images/arrow_back.svg" />
      </button>
      <div className="flex gap-4">
        <button onClick={() => openModal("default")}>
          {isConnected ? "Connected" : "About"}
        </button>
        <button onClick={() => push("/leaderboard")}>Leaderboard</button>
      </div>
    </div>
  );

  const renderHeaderButtons = () => {
    switch (pathname) {
      case "/":
        return (
          <div className="flex w-full justify-between px-4 items-center">
            <div>
              <button className="font-bold pt-2 lg:pl-10 text-xl" onClick={() => push("/")}>
                <img src="near-apac-logo.svg" width="140"/>
  
                </button>
            </div>
            <div className="flex gap-4">
              <button onClick={() => openModal("default")}>
                {" "}
                {isConnected ? "Connected" : "About"}
              </button>
              <button onClick={() => push("/leaderboard")}>Leaderboard</button>
            </div>
          </div>
        );
      case "/leaderboard":
        return headerButtonsNotHome(() => push("/"));
      case "/camera":
        return headerButtonsNotHome(() => push("/"));
      default:
        return null;
    }
  };

  return (
    <>
    <header className="fixed left-0 top-0 flex w-full justify-center h-12 bg-[#F3F4F8] text-black">
      {renderHeaderButtons()}
    </header>
</>
  );
};

export default Header;
