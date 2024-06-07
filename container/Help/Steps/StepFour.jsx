import {
  BackIcon,
  CameraIcon,
  MicrophoneIcon,
} from "@/assets";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const StepFour = ({ setStep }) => {
  return (
    <div className="step-three">
      <div className="header">
        <>
        <span onClick={()=>setStep(2)}>
            <BackIcon />
          </span>
          <h1>Chat with us</h1>
          <span style={{ color: "white" }}>.</span>
        </>
      </div>

      <div className="body">
      <div className="icon">
      <Image
          width={200}
          height={200}
          src={"/images/chat.svg"}
          alt="wallet"
          objectFit="contain"
          className="image"
        />
      </div>
      

        <div className="text">
          <h1>Hi! let’s help you today.</h1>

          <p>We are always available to reply your messages.</p>
        </div>

        <div className="input">
          <InputGroup
            box-shadow="0px 0px 0px 1px #CDD1DC"
            width={"320px"}
            size={"lg"}
            borderRadius={"16px"}
          >
            <InputLeftElement>😁</InputLeftElement>
            <Input placeholder="Send message" />
            <InputRightElement>
              <CameraIcon />
            </InputRightElement>
          </InputGroup>
          <span className="microphone">
            <MicrophoneIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export { StepFour };
