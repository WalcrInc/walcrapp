import React from "react";
import Camera from "@/components/Capture/Camera";

const Identity = () => {
  const videoConstraints = {
    facingMode: { exact: "environment" },
  };
  const cameraStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "20px",
  };

  return (
    <div>
      <Camera
        height={"300px"}
        width={"600px"}
        videoConstraints={videoConstraints}
        style={cameraStyle}
        heading={"Take a photo of your identity card"}
        text={
          "Ensure that all the sides are captured. Please make sure that the identity number in the image is clearly visible."
        }
      />
    </div>
  );
};

export default Identity;
