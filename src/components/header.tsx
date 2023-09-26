"use client";
import { useApp } from "@/providers/app";
import { useWallet } from "@mintbase-js/react";
import { usePathname, useRouter } from "next/navigation";
import InlineSVG from "react-inlinesvg";

const Header = () => {
  const pathname = usePathname();
  const { isConnected } = useWallet();
  const { push } = useRouter();
  const { openModal } = useApp();

  const headerButtonsNotHome = (onClick: any) => (
    <div className="flex w-full justify-between px-4 items-center">
      <button className="h-8 w-8 text-headerText" onClick={onClick}>
        <InlineSVG
          src="/images/arrow_back.svg"
          className="fill-current text-headerText"
        />
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
              <button
                className="font-bold pt-2 lg:pl-10 text-xl"
                onClick={() => push("/")}
              >
                {process.env.NEXT_PUBLIC_APP_TITLE || "Minsta"}
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
      <header className="fixed left-0 top-0 flex w-full justify-center h-12 bg-primary text-headerText">
        {renderHeaderButtons()}
      </header>
    </>
  );
};

export default Header;
