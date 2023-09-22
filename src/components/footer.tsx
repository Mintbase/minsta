"use client";

import { constants } from "@/constants";
import { useApp } from "@/providers/app";
import { useWallet } from "@mintbase-js/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const FooterButton = ({ onClick }: { onClick: any }) => (
  <button
    className="rounded-full h-24 w-24 bg-[#F3F4F8] absolute -top-12 flex items-center justify-center"
    onClick={onClick}
  >
    <div
      className="rounded-full h-20 w-20 gradientButton
  flex items-center justify-center"
    >
      <img src="/images/photo_camera.svg" className="h-12" alt="Camera" />
    </div>
  </button>
);

const Footer = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { isConnected } = useWallet();

  const { takePicture, openModal } = useApp();

  const renderFooterButtons = () => {
    const { isClosed } = constants


    switch (pathname) {
      case "/":
        return !isClosed ? (
          <footer className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-[#F3F4F8] h-16">
            <FooterButton
              onClick={
                isConnected ? () => push("/camera") : () => openModal("default")
              }
            />
          </footer>
        ): null;
      case "/leaderboard":
        return  !isClosed ?(
          <footer className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-[#F3F4F8] h-16">
            <FooterButton
              onClick={
                isConnected ? () => push("/camera") : () => openModal("default")
              }
            />
          </footer>
        ) : null;
      case "/camera":
        return null;
      default:
        return null;
    }
  };

  return renderFooterButtons();
};

export default Footer;
