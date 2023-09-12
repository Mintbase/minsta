const appName: string = process.env.NEXT_PUBLIC_APP_NAME || "NEARAPAC";
const arweaveKey = JSON.parse((process.env.ARWEAVE_KEY as string) || "{}");
const network = process.env.NEXT_PUBLIC_NEAR_NETWORK || "testnet";
const proxyContractAddress =
  process.env.NEXT_PUBLIC_PROXY_CONTRACT_ADDRESS || "1.minsta.mintbus.testnet";
const tokenContractAddress =
  process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS || "minsta.mintspace2.testnet";

const mintbaseBaseUrl = process.env.NEXT_PUBLIC_MINTBASE_BASE_URL || "https://testnet.wallet.mintbase.xyz"
const mintbaseWalletUrl = process.env.NEXT_PUBLIC_MINTBASE_WALLET_URL || "https://testnet.wallet.mintbase.xyz"

export const constants = {
  appName,
  arweaveKey,
  proxyContractAddress,
  tokenContractAddress,
  network,
  mintbaseBaseUrl,
  mintbaseWalletUrl
};


const configVars =   {"colors": {"primary": "#F3F4F8", "secondary": "#000", "gradOne": "#4472ad", "gradTwo": "#009dea"}}

export const config = {
  colors: configVars.colors
}