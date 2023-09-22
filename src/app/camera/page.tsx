"use client";

import CameraPage from "@/components/pages/camera";
import { constants } from "@/constants";

import React from "react";

const CameraComponent = () => {
  const { isClosed } = constants;

  if (isClosed) return null;

  return <CameraPage />;
};

export default CameraComponent;
