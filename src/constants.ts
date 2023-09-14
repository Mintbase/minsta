
const setup = JSON.parse((process.env.NEXT_PUBLIC_MINSTA_SETUP as string) || "{}");

const appName: string = process.env.NEXT_PUBLIC_APP_NAME || "NEARAPAC";
const arweaveKey = JSON.parse((process.env.ARWEAVE_KEY as string) || "{}");
const network = setup.network|| "testnet";
const proxyContractAddress =
 setup.contract || "1.minsta.mintbus.testnet";
const tokenContractAddress =
  setup.token || "minsta.mintspace2.testnet";

const mintbaseBaseUrl = setup.wallet
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

