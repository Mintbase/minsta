require("dotenv").config();

const appName: string = process.env.NEXT_PUBLIC_APP_TITLE || "MINTBASE";
const arweaveKey = JSON.parse((process.env.ARWEAVE_KEY as string) || "{}");
const network = process.env.NEXT_PUBLIC_NETWORK || "testnet";
const proxyContractAddress =
  process.env.NEXT_PUBLIC_CONTRACT || "1.minsta.mintbus.testnet";
const tokenContractAddress =
  process.env.NEXT_PUBLIC_TOKEN || "minsta.mintspace2.testnet";

const mintbaseBaseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://testnet.mintbase.xyz";

const mintbaseWalletUrl =
  process.env.NEXT_PUBLIC_WALLET_ADDRESS ||
  "https://testnet.wallet.mintbase.xyz";

export const constants = {
  appName,
  arweaveKey,
  proxyContractAddress,
  tokenContractAddress,
  network,
  mintbaseBaseUrl,
  mintbaseWalletUrl,
  isClosed: process.env.NEXT_PUBLIC_MINTING_CLOSED || false,
};
