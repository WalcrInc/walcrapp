import {
  AddIconThin,
  BackIconX,
  CallIcon,
<<<<<<< HEAD:src/app/Message/Steps/StepTwo.jsx
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
=======
  SendMessageIcon,
  UserIcon,
  UserPlusIcon,
} from "@/assets";
>>>>>>> 159f54632072f5ad3ee4ea0b777b3cac67432db1:container/Message/Steps/StepTwo.jsx
import Image from "next/image";
import React from "react";

const StepTwo = ({ handlePrev, message }) => {
  return (
    <div className="step-two">
      <div className="header">
        <div className="back-icon-text">
          <span onClick={handlePrev}>
            <BackIconX />
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
          <div className="add-user">
            <UserIcon />
            <i><UserPlusIcon /></i>
          </div>
          <CallIcon />
        </div>
      </div>

      <div className="body">
<<<<<<< HEAD:src/app/Message/Steps/StepTwo.jsx
        <div className="info">
          <div className="info-icon">
            <Image
              src={"@/assets/images/profile.svg"}
              height={100}
              width={100}
              alt="profile-picture"
            />
=======
        <div className="messages">
          <div className="date-holder">
            <span className="date">Today</span>
          </div>
          <div className="message received">
            <span className="time">15:29</span>
            <p>Hello!</p>
            <p>Oh okay I can see you from...</p>
          </div>
          <div className="message sent">
            <p className="time">15:29</p>
            <p>Hi!</p>
          </div>
          <div className="message sent">
            <p>I'm on my way already</p>
>>>>>>> 159f54632072f5ad3ee4ea0b777b3cac67432db1:container/Message/Steps/StepTwo.jsx
          </div>
        </div>


        <div className="input">
          <i><AddIconThin /></i>
          <input
            type="text"
          />
          <i><SendMessageIcon /></i>
        </div>
      </div>
    </div>
  );
};

export { StepTwo };