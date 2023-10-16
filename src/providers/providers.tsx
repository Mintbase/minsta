import { constants } from "@/constants";
import DataProvider from "./data";
import { AppProvider } from "./app";
import { WalletContextProvider } from "@mintbase-js/react";

import { setupMintbaseWallet } from "@mintbase-js/wallet";

const Providers = ({ children }: { children: React.ReactNode }) => {

  const network = constants.network as "testnet" | "mainnet"

  const walletUrls = {
    testnet: 'https://testnet.wallet.mintbase.xyz/',
    mainnet: 'https://wallet.mintbase.xyz',
  }

  return (
    <WalletContextProvider
      contractAddress={constants.tokenContractAddress}
      network={network}
      additionalWallets={[
        setupMintbaseWallet({
          networkId: network,
          walletUrl: walletUrls[network],
          deprecated: false,
          // callbackUrl: getCallbackUrl(),
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
