"use client"

import { Toaster } from "react-hot-toast";

export const Alert = () => {

 const isDev =
    typeof window !== "undefined" &&
    (window.location.href.includes("localhost") ||
      window.location.href.includes("vercel.app"));
    return (
          <Toaster
          toastOptions={{
            style: {
              border: "1px solid #713200",
              padding: "26px",
              color: "#333",
              background: "#dedede",
              fontSize: "10px",
              width: "300px",
              display: "inline-table",
            },
          }}
        />
    )
}