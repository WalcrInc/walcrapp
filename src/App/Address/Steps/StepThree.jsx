import { BackIcon } from "Src/Assets/index";
import Image from "next/image";
import React from "react";
import { mapData } from "./data";

const StepThree = ({handlePrev}) => {
  return (
    <div style={{ padding: "6%" }}>
      {" "}
      <div className="header">
        <>
          <span onClick={handlePrev}>
            <BackIcon />
          </span>

          <h1>Address</h1>
          <span style={{ color: "white" }}>.</span>
        </>
      </div>
      <div className="step-3">
        {mapData.map((map) => (
          <div className="info" key={map.id}>
            <Image
              width={87}
              height={64}
              src={"@/Assets/images/map.svg"}
              alt="wallet"
              objectFit="contain"
            />
            <div className="text">
              <h1>{map.location}</h1>
              <p>{map.address}</p>
            </div>
            <span>{map.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { StepThree };
