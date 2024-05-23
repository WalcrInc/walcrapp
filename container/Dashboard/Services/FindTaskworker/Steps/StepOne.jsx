import { AddressIconSmall, BackIcon, RadioIcon } from "@/assets";
import { Button, Input } from "@chakra-ui/react";
import React from "react";

const StepOne = ({ handleNext, handlePrev }) => {
  return (
    <>
      <div className="top">
        <span onClick={handlePrev} className="back-icon">
          <BackIcon />
        </span>
      </div>
      <div className="bottom">
        <div className="icon-input">
          <div className="icon">
            <RadioIcon />
          </div>
          <div className="input">
            <Input
            size={"lg"}
              width={"100%"}
              border={"none"}
              boxShadow={"0px 0px 0px 1px #CDD1DC"}
              background={"#F0F2F6"}
              borderRadius={"6px"}
            />
            <Input
             size={"lg"}
              width={"100%"}
              boxShadow={"0px 0px 0px 1px #CDD1DC"}
              background={"#F0F2F6"}
              placeholder="Destination address"
              borderRadius={"6px"}
            />
          </div>
        </div>

        <Button
          color={"#fff"}
          background={"#1a1a1a"}
          borderRadius={"6px"}
          size={"lg"}
          onClick={handleNext}
        >
          Find TaskWorker
        </Button>
      </div>
    </>
  );
};

export { StepOne };
