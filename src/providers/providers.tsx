import { constants } from "@/constants";
import DataProvider from "./data";
import { AppProvider } from "./app";

import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import { ReplicateProvider } from "./replicate";

export const isDev = process.env.NEXT_PUBLIC_ENV === "dev" 

export const getCallbackUrl = () => {
  let callbackUrl = "";

  if (typeof window !== "undefined") {
    callbackUrl = window?.location.origin
  }
  
  return callbackUrl;
};


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MintbaseWalletContextProvider
      contractAddress={constants.tokenContractAddress}
      network={constants.network as any}
      callbackUrl={getCallbackUrl()}
      onlyMbWallet
    >
      <AppProvider>
       <ReplicateProvider>
        <DataProvider>{children}</DataProvider>
        </ReplicateProvider>
      </AppProvider>
    </MintbaseWalletContextProvider>
  );
};

export default Providers;
