import {
  BackIcon,
  CallIcon,
  CameraIcon,
  Location_Grey,
  MicrophoneIcon,
} from "@/assets/index";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const StepTwo = ({ handlePrev, message }) => {
  return (
    <div className="step-two">
      <div className="header">
        <div className="back-icon-text">
          <span onClick={handlePrev}>
            <BackIcon />
          </span>
          <div className="icon-text">
            <div className="icon">
              <Image
                src={"@/assets/images/profile.svg"}
                height={40}
                width={40}
                alt="profile-picture"
              />
            </div>
            <div className="text">
              <h1>{message.name}</h1>
              <p>{message.status}</p>
            </div>
          </div>
        </div>

        <div className="icons">
          <CallIcon />
          <CameraIcon />
        </div>
      </div>

      <div className="body">
        <div className="info">
          <div className="info-icon">
            <Image
              src={"@/assets/images/profile.svg"}
              height={100}
              width={100}
              alt="profile-picture"
            />
          </div>
          <h1>{message.name}</h1>
          <p>
            <Location_Grey /> {message.location}
          </p>
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

export { StepTwo };
