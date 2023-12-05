"use client";

import { constants } from "@/constants";
import { useApp } from "@/providers/app";
import { useMbWallet } from "@mintbase-js/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ReactEventHandler } from "react";
import InlineSVG from "react-inlinesvg";

export const FooterButton = ({ onClick }: { onClick: ReactEventHandler }) => (
  <button
    className="rounded-full h-24 w-24 bg-primary absolute -top-12 flex items-center justify-center"
    onClick={onClick}
  >
    <div
      className="rounded-full h-20 w-20 gradientButton
  flex items-center justify-center"
    >
      <InlineSVG
        src="/images/photo_camera.svg"
        className="fill-current text-camera h-12"
      />
    </div>
  </button>
);

const Footer = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { isConnected } = useMbWallet();

  const { takePicture, openModal } = useApp();

  const renderFooterButtons = () => {
    const { isClosed } = constants;

    switch (pathname) {
      case "/":
        return !isClosed ? (
          <footer className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-primary h-16">
            <FooterButton
              onClick={
                isConnected ? () => push("/camera") : () => openModal("default")
              }
            />
          </footer>
        ) : null;
      case "/leaderboard":
        return !isClosed ? (
          <footer className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-primary h-16">
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
