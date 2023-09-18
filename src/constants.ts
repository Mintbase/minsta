import { MINSTA_SETUP } from "./data/fallback";

const setup = JSON.parse((process.env.NEXT_PUBLIC_MINSTA_SETUP as string) ) || MINSTA_SETUP;

const appName: string = process.env.NEXT_PUBLIC_APP_NAME || "MINTBASE";
const arweaveKey = JSON.parse((process.env.ARWEAVE_KEY as string) || "{}");
const network = setup.network || "testnet";
const proxyContractAddress =
 setup.contract || "1.minsta.mintbus.testnet";
const tokenContractAddress =
  setup.token || "minsta.mintspace2.testnet";

const mintbaseBaseUrl = setup.wallet || "https://testnet.wallet.mintbase.xyz"

const mintbaseWalletUrl = setup.wallet || "https://testnet.wallet.mintbase.xyz"


export const constants = {
  appName,
  arweaveKey,
  proxyContractAddress,
  tokenContractAddress,
  network,
  mintbaseBaseUrl,
  mintbaseWalletUrl,
  isClosed: setup.closed
};

