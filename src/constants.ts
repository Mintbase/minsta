require("dotenv").config();

const appName: string = process.env.NEXT_PUBLIC_APP_TITLE || "MINTBASE";
const network = process.env.NEXT_PUBLIC_NETWORK || "testnet";
const proxyContractAddress =
  process.env.NEXT_PUBLIC_PROXY_MINTER_CONTRACT_ADDRESS ||
  "1.minsta.mintbus.testnet";
const tokenContractAddress =
  process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS || "minsta.mintspace2.testnet";

const mintbaseBaseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://testnet.mintbase.xyz";

const mintbaseWalletUrl =
  process.env.NEXT_PUBLIC_MINTBASE_WALLET_URL ||
  "https://testnet.wallet.mintbase.xyz";

const twitterText =
  process.env.NEXT_PUBLIC_TWITTER ||
  "Explore%20unforgettable%20moments%20at%20%2Mintbase%20%40Mintbase%20%40NEARProtocol%20%23BOS%20%23NEAR";

export const constants = {
  appName,
  proxyContractAddress,
  tokenContractAddress,
  network,
  mintbaseBaseUrl,
  mintbaseWalletUrl,
  twitterText,
  isClosed: process.env.NEXT_PUBLIC_MINTING_CLOSED === "true" || false,
};
