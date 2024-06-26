import { BackIcon, SearchIcon } from "@/assets";
import useRoutes from "@/hooks/Routes/Routes";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { messageData } from "./data";
import Image from "next/image";

const StepOne = ({ handleSelected }) => {
  const { handleDashboardRoute } = useRoutes();
  return (
    <div className="step-one">
      <div className="header">
        <>
          <span onClick={handleDashboardRoute}>
            <BackIcon />
          </span>
          <h1>Messages</h1>
          <span style={{ color: "white" }}>.</span>
        </>
      </div>
      <div className="body">
        <InputGroup width={"100%"} size={"lg"} background={"#f4f4f4"}>
          <Input placeholder="Search for chat" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <div className="option">
          <p>General</p>
          <p>
            <span></span> My TaskWalkers
          </p>
        </div>
        <div className="message-body">
          {messageData.map((message) => (
            <div
              key={message.id}
              onClick={() => handleSelected(message)} // Corrected this line
              className="message-info"
            >
              <div className="icon-text">
                <div className="icon">
                  <Image
                    src={"/images/profile.svg"}
                    height={55}
                    width={55}
                    alt="profile-picture"
                  />
                </div>
                <div className="text">
                  <h1>{message.name}</h1>
                  <p>{message.content}</p>
                </div>
              </div>
              <div className="time-count">
                <p>{message.time}</p>
                <p className="count">{message.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { StepOne };
