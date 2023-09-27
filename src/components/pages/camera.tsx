import { Mint } from "@/components/Mint";
import { FooterButton } from "@/components/footer";
import Webcam from "react-webcam";
import { useCamera } from "@/hooks/useCamera";
import InlineSVG from "react-inlinesvg";

export default function CameraPage() {
  const {
    picture,
    tryAgain,
    cameraLoaded,
    toggleCamera,
    permissionGranted,
    webcamRef,
    facingMode,
    setCameraLoaded,
    capture,
  } = useCamera();

  if (picture) {
    return <Mint currentPhoto={picture} backStep={tryAgain} />;
  }

  return (
    <>
      <main className="h-camera overflow-hidden	 w-screen flex items-center justify-center">
        <div className="h-1/2 relative m-camera">
          {!!cameraLoaded && (
            <h2 className="align-center flex font-semibold mb-4 text-mainText text-center">
              <span className="w-full">Let&apos;s Take a Picture </span>
              <div className="h-8 w-8 right-0 absolute" onClick={toggleCamera}>
                <InlineSVG
                  src="/images/cameraswitch.svg"
                  className="fill-current text-mainText"
                />
              </div>
            </h2>
          )}
          {/* 
            {pageLoaded && !permissionGranted && (
            <button onClick={requestCameraPermission}>Try Again</button>
          )} */}

          {permissionGranted && !picture && (
            <Webcam
              ref={webcamRef}
              className="flex h-full w-full "
              screenshotFormat="image/webp"
              forceScreenshotSourceSize
              screenshotQuality={1}
              videoConstraints={{
                height: 1024,
                width: 1024,
                aspectRatio: 1,
                facingMode: facingMode,
              }}
              onPlaying={() => {
                setCameraLoaded(true);
              }}
            />
          )}
        </div>
      </main>
      {!picture && (
        <footer className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-primary h-16">
          <FooterButton onClick={capture} />
        </footer>
      )}
    </>
  );
}
