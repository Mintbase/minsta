import { useApp } from "@/providers/app";
import { Spinner } from "./Spinner";

export function Mint({
  backStep,
  currentPhoto,
}: {
  backStep: () => void;
  currentPhoto: string;
}) {
  const { isLoading, mintImage } = useApp();

  return (
    <main className="h-camera w-screen flex flex-col items-center margin-mint">
      {isLoading ? (
        <>
          {" "}
          <Spinner />
          <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-mainText text-center">
            Uploading your image...
          </h1>
        </>
      ) : (
        <div className="h-full w-64 md:h-96 md:w-96 flex flex-col gap-4">
          <img src={currentPhoto} />

          <div className="flex gap-4 w-full">
            <button
              className="text-secondaryBtnText w-full border border-secondaryBtnText rounded px-4 py-2"
              onClick={backStep}
            >
              Try again
            </button>
            <button
              className="gradientButton w-full text-primaryBtnText rounded px-4 py-2"
              onClick={() => mintImage(currentPhoto)}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
