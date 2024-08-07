import React from "react";
import Camera from "@/components/Capture/Camera";

const Liscense = () => {
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
        heading={`Take a photo of your driver's License`}
        text={`Ensure that your vehicle's maker, model, year, license plate, VIN and expiration ae clear and visible`}
      />
    </div>
  );
};

export default Liscense;
