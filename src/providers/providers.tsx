import { constants } from "@/constants";
import DataProvider from "./data";
import { AppProvider } from "./app";
import { WalletContextProvider } from "@mintbase-js/react";

import { setupMintbaseWallet } from "@mintbase-js/wallet";

const walletUrls = {
  testnet: "https://testnet.wallet.mintbase.xyz/",
  mainnet: "https://wallet.mintbase.xyz",
};

export const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

export const getCallbackUrl = () => {
  let callbackUrl = "";

  if (typeof window !== "undefined") {
    callbackUrl = window.location.origin;
  }

  return callbackUrl;
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WalletContextProvider
      contractAddress={constants.tokenContractAddress}
      network={constants.network as any}
      additionalWallets={[
        setupMintbaseWallet({
          networkId: constants.network,
          walletUrl: walletUrls[constants.network] as any,
          deprecated: false,
          callbackUrl: getCallbackUrl(),
        }),
      ]}
    >
      <AppProvider>
        <DataProvider>{children}</DataProvider>
      </AppProvider>
    </WalletContextProvider>
  );
};

export default Providers;
