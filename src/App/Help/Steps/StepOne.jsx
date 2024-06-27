import {
  BackIcon,
  BoxIcon,
  ChattingIcon,
  FAQIcon,
  FrontIcon,
  SearchIcon,
  TopicIcon,
} from "../../../../assets";
import useRoutes from "../../../Features/Hooks/Routes/Routes";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { messageData } from "./data";
import Image from "next/image";

const StepOne = ({ handleSelected, handleNext }) => {
  const { handleDashboardRoute } = useRoutes();
  return (
    <div className="step-one">
      <div className="header">
        <>
          <span onClick={handleDashboardRoute}>
            <BackIcon />
          </span>
          <h1>Help and Support Center</h1>
          <span style={{ color: "white" }}>.</span>
        </>
      </div>
      <div className="body">
        <InputGroup width={"100%"} size={"lg"} background={"#F0F2F6"}>
          <Input placeholder="Search for topics or questions" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>

        <div className="faq">
          <div className="header">
            <h1>
              <FAQIcon /> FAQs
            </h1>
            <p>View all</p>
          </div>
          <div className="body">
            <div className="box-1">
              <BoxIcon />
                <h2> Package delivery</h2>
                <p>Send and receive a package with our Walcr</p>
         
            </div>
            <div className="box-2">
            <BoxIcon />
                <h2> Package delivery</h2>
                <p>Send and receive a package with our Walcr</p>
         
            </div>
          </div>
        </div>
        <div className="topic">
          <div className="header">
            <h1>
              <TopicIcon /> Topics
            </h1>
            <p>View all</p>
          </div>
          <div className="body">
            <div className="box">
              <span></span>
              <p>Returns and Refunds</p>
            </div>
            <div className="box">
              <span></span>
              <p>Returns and Refunds</p>
            </div>
            <div className="box">
              <span></span>
              <p>Returns and Refunds</p>
            </div>
            <div className="box">
              <span></span>
              <p>Returns and Refunds</p>
            </div>
          
          </div>
        </div>

        <div className="bottom-fixed" onClick={handleNext}>
          <div className="text-icon">
            <ChattingIcon />
            <p>Start a conversation</p>
          </div>

          <FrontIcon />
        </div>
      </div>
    </div>
  );
};

export { StepOne };
