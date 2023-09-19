import { constants } from "@/constants";
import DataProvider from "./data";
import { AppProvider } from "./app";
import { WalletContextProvider } from "@mintbase-js/react";

import { setupAuthWallet } from "@mintbase-js/wallet";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WalletContextProvider
      contractAddress={constants.tokenContractAddress}
      network={constants.network as any}
      additionalWallets={[
        //@ts-ignore
        setupAuthWallet({
          networkId: constants.network as "testnet" | "mainnet",
          relayerUrl: "/api/relay",
          signInContractId: constants.tokenContractAddress,
          walletUrl: constants.mintbaseWalletUrl,
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
