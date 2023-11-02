import { constants } from "@/constants";
import DataProvider from "./data";
import { AppProvider } from "./app";
import { WalletContextProvider } from "@mintbase-js/react";

import { MintbaseWalletContextProvider } from "@mintbase-js/react";

export const isDev = process.env.NEXT_PUBLIC_ENV === "dev" || window?.location?.origin.includes('localhost');

export const getCallbackUrl = () => {
  let callbackUrl = "";

  if (typeof window !== "undefined") {
    isDev
      ? `http://${window?.location.host}/`
      : `http://${window?.location.host}/`;
  }

  return callbackUrl;
};



const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MintbaseWalletContextProvider
      contractAddress={constants.tokenContractAddress}
      network={constants.network as any}
      callbackUrl={getCallbackUrl()}
    >
      <AppProvider>
        <DataProvider>{children}</DataProvider>
      </AppProvider>
    </MintbaseWalletContextProvider>
  );
};

export default Providers;
