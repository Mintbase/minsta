import { constants } from "@/constants";
import DataProvider from "./data";
import { AppProvider } from "./app";
import { WalletContextProvider } from "@mintbase-js/react";

import { setupMintbaseWallet } from "@mintbase-js/wallet";
import { ReplicateProvider } from "./replicate";

const walletUrls = {
  testnet: "https://testnet.wallet.mintbase.xyz/",
  mainnet: "https://wallet.mintbase.xyz",
};

export const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

export const getCallbackUrl = () => {
  let callbackUrl = "";

  if (typeof window !== "undefined") {
    isDev
      ? `http://${window?.location.host}/`
      : `http://${window?.location.host}/`;
  }

  return callbackUrl;
};

const walletUrl =
  constants.network == "testnet" ? walletUrls.testnet : walletUrls.mainnet;

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WalletContextProvider
      contractAddress={constants.tokenContractAddress}
      network={constants.network as any}
      additionalWallets={[
        setupMintbaseWallet({
          networkId: constants.network,
          walletUrl: walletUrl,
          deprecated: false,
          callbackUrl: getCallbackUrl(),
        }),
      ]}
    >
      <ReplicateProvider>
        <AppProvider>
          <DataProvider>{children}</DataProvider>
        </AppProvider>
      </ReplicateProvider>
    </WalletContextProvider>
  );
};

export default Providers;
