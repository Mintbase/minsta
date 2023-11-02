import React, { useContext, useState, createContext } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@mintbase-js/react";
import { uploadReference } from "@mintbase-js/storage";
import { constants } from "@/constants";
import { Heebo } from "next/font/google";
import "../style/global.css";
import { generateRandomId } from "@/utils/generateRandomId";
import { convertBase64ToFile } from "@/utils/base64ToFile";
import { useReplicate } from "./replicate";

const heebo = Heebo({ subsets: ["latin"] });

export const AppContext = createContext<{
  cameraRef: React.MutableRefObject<any> | undefined;
  setCameraRef: (ref: React.MutableRefObject<any> | undefined) => void;
  takePicture: () => void;
  currentPhoto: boolean;
  openModal: (modalType: "default" | "rewards") => void;
  closeModal: () => void;
  isMainModalOpen: boolean;
  isRewardsModalOpen: boolean;
  mintImage: (photo: string) => void;
  isLoading: boolean;
}>({
  cameraRef: undefined,
  setCameraRef: (ref: React.MutableRefObject<any> | undefined) => null,
  takePicture: () => null,
  currentPhoto: false,
  openModal: (modalType: "default" | "rewards") => null,
  closeModal: () => null,
  isMainModalOpen: false,
  isRewardsModalOpen: false,
  mintImage: (photo: string) => null,
  isLoading: false,
});

interface IAppConsumer {
  cameraRef: string | undefined;
  setCameraRef: (ref: React.MutableRefObject<any> | undefined) => void;
  takePicture: () => void;
  currentPhoto: string | undefined;
  openModal: (modalType: "default" | "rewards") => void;
  closeModal: () => void;
  isMainModalOpen: boolean;
  isRewardsModalOpen: boolean;
  mintImage: (photo: string) => void;
  isLoading: false;
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [cameraRef, _setCameraRef] = useState<
    React.MutableRefObject<any> | undefined
  >(undefined);
  const [currentPhoto, setCurrentPhoto] = useState(false);
  const { selector, activeAccountId } = useWallet();
  const [isLoading, setLoading] = useState(false);
  const { addRequest } = useReplicate();

  const [isMainModalOpen, setMainModalOpen] = useState(false);
  const [isRewardsModalOpen, setRewardsModalOpen] = useState(false);

  const handleOpenModal = (modalType: string) => {
    if (modalType === "default") {
      setMainModalOpen(true);
    } else if (modalType === "rewards") {
      setRewardsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setMainModalOpen(false);
    setRewardsModalOpen(false);
  };

  const setCameraRef = (ref: React.MutableRefObject<any> | undefined) => {
    _setCameraRef(ref);
  };

  const takePicture = () => {
    setCurrentPhoto(true);
  };

  const _mintImage = async (photo: string) => {
    if (!activeAccountId) return null;
    const wallet = await selector.wallet();
    setLoading(true);

    const photoFile = convertBase64ToFile(photo);

    let titleAndDescription;
    try {
      const titleAndDescriptionRequest = await addRequest(
        {
          image: photo, // TODO: we have a limit here of 10MB I believe. Check docs later.
          prompt: `Describe this image, be direct and include important details. The title should be succint and 5 words long. The description can be longer than 15 words and more descriptive.
  
          Respond in JSON {"title": <5 words>, "description": <15 words>}`,
        },
        "2facb4a474a0462c15041b78b1ad70952ea46b5ec6ad29583c0b29dbd4249591"
      );

      titleAndDescription = JSON.parse(
        titleAndDescriptionRequest.output.join("")
      );
    } catch (error) {}

    const refObject = {
      title: titleAndDescription?.title ?? generateRandomId(10),
      description: titleAndDescription?.description ?? generateRandomId(10),
      media: photoFile,
    };

    const uploadedData = await uploadReference(refObject);

    const currentUrl = new URL(window.location.href);

    const protocol = currentUrl.protocol;
    const domain = currentUrl.hostname;
    const port = currentUrl.port;

    const result = await wallet?.signAndSendTransaction({
      signerId: activeAccountId,
      receiverId: constants.proxyContractAddress,
      actions: [
        {
          type: "FunctionCall",
          params: {
            methodName: "mint",
            args: {
              metadata: JSON.stringify({
                reference: uploadedData?.id,
                extra: null,
              }),
              nft_contract_id: constants.tokenContractAddress,
            },
            gas: "200000000000000",
            deposit: "10000000000000000000000",
          },
        },
      ],
      // @ts-ignore
      successUrl: `${protocol}//${domain}${!port ? "" : ":" + port}`,
      callbackUrl: `${protocol}//${domain}${!port ? "" : ":" + port}`,
    });
  };

  return (
    <>
      {" "}
      <style jsx global>{`
        html {
          font-family: ${heebo.style.fontFamily};
        }
      `}</style>
      <AppContext.Provider
        value={{
          cameraRef,
          setCameraRef,
          takePicture,
          currentPhoto,
          openModal: handleOpenModal,
          closeModal: handleCloseModal,
          isMainModalOpen,
          isRewardsModalOpen,
          mintImage: _mintImage,
          isLoading: isLoading,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

// @ts-ignore
export const useApp = () => useContext<IAppConsumer>(AppContext);
