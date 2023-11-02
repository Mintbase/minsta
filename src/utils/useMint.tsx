import { useWallet } from "@mintbase-js/react";
import { uploadReference } from "@mintbase-js/storage";
import { useState } from "react";
import { convertBase64ToFile } from "./base64ToFile";
import { generateRandomId } from "./generateRandomId";
import { useReplicate } from "@/providers/replicate";
import { constants } from "@/constants";

interface ReferenceObject {
  title: string;
  description: string;
  media: File;
}

const useMintImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { selector, activeAccountId } = useWallet();
  const { addRequest } = useReplicate();

  const getWallet = async () => {
    try {
      return await selector.wallet();
    } catch (error) {
      console.error("Failed to retrieve the wallet:", error);
      setLoading(false);
      throw new Error("Failed to retrieve the wallet");
    }
  };

  const getTitleAndDescription = async (photo: string) => {
    try {
      const requestPayload = {
        image: photo,
        prompt: `Describe this image, be direct and include important details. The title should be succinct and 5 words long. The description can be longer than 15 words and more descriptive.
      
      Respond in JSON {"title": "<title>", "description": "<description>"}`,
      };
      const requestHash =
        "2facb4a474a0462c15041b78b1ad70952ea46b5ec6ad29583c0b29dbd4249591";
      const response = await addRequest(requestPayload, requestHash);

      return JSON.parse(response.output.join(""));
    } catch (error) {
      console.error("Failed to get title and description:", error);
      return {
        title: generateRandomId(10),
        description: generateRandomId(10),
      };
    }
  };

  const uploadReferenceObject = async (refObject: ReferenceObject) => {
    try {
      return await uploadReference(refObject);
    } catch (error) {
      console.error("Failed to upload reference:", error);
      setLoading(false);
      throw new Error("Failed to upload reference");
    }
  };

  const performTransaction = async (
    wallet: any,
    metadata: any,
    baseUrl: string
  ) => {
    if (!wallet) {
      throw new Error("Wallet is not defined.");
    }

    try {
      return await wallet.signAndSendTransaction({
        signerId: activeAccountId,
        receiverId: constants.proxyContractAddress,
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "mint",
              args: {
                metadata: JSON.stringify(metadata),
                nft_contract_id: constants.tokenContractAddress,
              },
              gas: "200000000000000",
              deposit: "10000000000000000000000",
            },
          },
        ],
        callbackUrl: baseUrl,
      });
    } catch (error) {
      console.error("Failed to sign and send transaction:", error);
      throw new Error("Failed to sign and send transaction");
    }
  };

  const mintImage = async (photo: string) => {
    if (!activeAccountId) {
      setError("Active account ID is not set.");
      return;
    }

    setLoading(true);

    try {
      const wallet = await getWallet();
      const photoFile = convertBase64ToFile(photo);
      const titleAndDescription = await getTitleAndDescription(photo);
      const refObject = {
        title: titleAndDescription.title,
        description: titleAndDescription.description,
        media: photoFile,
      };
      const uploadedData = await uploadReferenceObject(refObject);
      const baseUrl = `${window.location.origin}/`;
      const metadata = { reference: uploadedData?.id };
      await performTransaction(wallet, metadata, baseUrl);
    } catch (error: any) {
      setError(error?.message || "An error occurred during the minting process.");
    } finally {
      setLoading(false);
    }
  };

  return { mintImage, loading, error };
};

export default useMintImage;
