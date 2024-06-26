import { BackIcon } from "@/Assets";
import Image from "next/image";
import React from "react";

const StepThree = ({ setStep }) => {
  return (
    <div className="step-three">
      <div className="header">
        <>
          <span onClick={() => setStep(2)}>
            <BackIcon />
          </span>
          <h1>Call us</h1>
          <span style={{ color: "white" }}>.</span>
        </>
      </div>

      <div className="body">
        <div className="icon">
          <Image
            width={200}
            height={200}
            src={"/images/call.svg"}
            alt="wallet"
            objectFit="contain"
            className="image"
          />
        </div>

        <div className="text">
          <h1>Hi! let’s help you today.</h1>

          <p>
            Phone lines are available between 8:00Am <br /> and 5:00 pm on
            weekdays{" "}
          </p>
          <h2>07000CALLWALCR</h2>
        </div>
      </div>
    </div>
  );
};

export { StepThree };
