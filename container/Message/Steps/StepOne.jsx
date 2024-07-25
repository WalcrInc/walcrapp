import { ActiveRedIcon, ArchiveIcon, BackIconX, SearchIcon } from "@/assets";
import useRoutes from "@/hooks/Routes/Routes";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { messageData } from "./data";
import Image from "next/image";

const StepOne = ({ handleSelected }) => {
  const { handleDashboardRoute } = useRoutes();
  const [filter, setFilter] = useState('all');

  function filterMessages(by) {
    setFilter(by);

  }

  return (
    <div className="step-one">
      <div className="header">
        <>
          <span onClick={handleDashboardRoute}>
            <BackIconX />
          </span>
          <h1>Messages</h1>
          <button className="active-messages">
            <ArchiveIcon />
            <i><ActiveRedIcon /></i>
          </button>
        </>
      </div>
      <div className="body">
        <InputGroup width={"100%"} size={"lg"} background={"#f4f4f4"}>
          <Input placeholder="Search Messages" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <div className="option">
          <button
            onClick={() => filterMessages("all")}
            className={`${filter === "all" ? "active" : ""}`}
          >
            All Chats
          </button>
          <button
            onClick={() => filterMessages("active")}
            className={`${filter === "active" ? "active" : ""}`}
          >
            Active Orders
          </button>
          <button
            onClick={() => filterMessages("saved")}
            className={`${filter === "saved" ? "active" : ""}`}
          >
            Saved TaskWalkers
          </button>
        </div>
        <div className="message-body no-scrollbar">
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
