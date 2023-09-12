"use client";

import { Mint } from "@/components/Mint";
import { Spinner } from "@/components/Spinner";
import { FooterButton } from "@/components/footer";
import { useApp } from "@/providers/app";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Webcam from "react-webcam";

export default function CameraPage() {
  const { setCameraRef } = useApp();
  const [facingMode, setFacingMode] = useState("environment");
  const [cameraLoaded, setCameraLoaded] = useState(false);
  const [permissionGranted, setPermission] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [picture, setPicture] = useState(null);

  const webcamRef = React.useRef(null);

  useLayoutEffect(() => {
    if (!pageLoaded) {
      const timeout = setTimeout(() => {
        setPageLoaded(true);
      }, 500); // 2000 milliseconds = 2 seconds

      return () => {
        // Clear the timeout if the component unmounts or the effect re-runs
        clearTimeout(timeout);
      };
    }
  }, []); //

  async function requestCameraPermission() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      setPermission(true); // Update the permission state
      // Don't forget to close the stream
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      // User denied permission or some other error occurred
      console.error("Camera permission denied:", error);
    }
  }

  const askPermission = () => {
    navigator?.permissions
      .query({ name: "camera" as PermissionName })
      .then((permissionStatus) => {
        if (permissionStatus.state === "granted") {
          setPermission(true);
        } else if (permissionStatus.state === "prompt") {
          requestCameraPermission();
        } else {
          console.log("Camera permission denied.");
        }
      });
  };

  useEffect(() => {
    if (document) {
      document.body.classList.add("overflow-hidden");
    }
  }, []);

  useEffect(() => {
    // Check if camera permission is already granted
    askPermission();
  }, []);

  useEffect(() => {
    if (!webcamRef || !webcamRef.current) return;

    setCameraRef(webcamRef);
  }, [setCameraRef, webcamRef]);

  const toggleCamera = () => {
    const nextFacingMode =
      facingMode === "environment" ? "user" : "environment";

    setFacingMode(nextFacingMode);
  };

  const capture = React.useCallback(() => {
    const webcamScreen = webcamRef as any;
    const imageSrc = webcamScreen.current.getScreenshot();
    setPicture(imageSrc);
  }, [webcamRef]);

  const tryAgain = () => {
    setPicture(null);
  };

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (permissionGranted && initialLoad) {
      // Initialize the camera after permission is granted on initial load
      setCameraLoaded(true);
      setInitialLoad(false);
    }
  }, [permissionGranted, initialLoad]);

  if (picture) {
    return <Mint currentPhoto={picture} backStep={tryAgain} />;
  }

  return (
    <>
      <main className="h-camera overflow-hidden	 w-screen flex items-center justify-center">
        <div className="h-1/2 relative m-camera">
          {!!cameraLoaded && (
            <h2 className="align-center flex font-semibold mb-4 text-black text-center">
              <span className="w-full">Let&apos;s Take a Picture </span>
              <div className="h-8 w-8 right-0 absolute" onClick={toggleCamera}>
                <img src="/images/cameraswitch.svg" />
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
        <footer className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-[#F3F4F8] h-16">
          <FooterButton onClick={capture} />
        </footer>
      )}
    </>
  );
}
