import {
  BackIcon,
  CallIcon,
  CameraIcon,
  ChattingIcon,
  FAQIcon,
  ForwardIcon,
  ForwardIconX,
  Location_Grey,
  MicrophoneIcon,
} from "@/assets";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StepTwo = ({ handlePrev, handleNext, setStep }) => {
  return (
    <div className="step-two">
      <div className="header">
        <>
          <span onClick={handlePrev}>
            <BackIcon />
          </span>
          <h1>Help and Support Center</h1>
          <span style={{ color: "white" }}>.</span>
        </>
      </div>

      <div className="body">
        <Image
          width={261}
          height={261}
          src={"/images/help.svg"}
          alt="wallet"
          objectFit="contain"
          className="image"
        />

        <div className="text">
          <h1>
            Hi! <br />
            How can we be of <br /> help today
          </h1>
        </div>

        <div className="help-shorcut">
          <div className="help" onClick={() => setStep(3)}>
            <h3>
              <CallIcon /> Call us
            </h3>
            <ForwardIconX />
          </div>
          <div className="help" onClick={() => setStep(4)}>
            <h3>
              <ChattingIcon /> Chat with us
            </h3>
            <ForwardIconX />
          </div>
          <div className="help" onClick={() => setStep(5)}>
            <h3>
              <FAQIcon /> FAQs
            </h3>
            <ForwardIconX />
          </div>
        </div>
      </div>
    </div>
  );
};

export { StepTwo };
