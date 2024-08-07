import { BackIcon, RadioIcon } from "@/assets/index";
import { Button, FormLabel, Input, Select } from "@chakra-ui/react";
import React from "react";

const StepTwo = ({ handleNext, handlePrev }) => {
  const getAddress = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("address")
  );
  return (
    <>
      <div className="top">
        <span onClick={handlePrev} className="back-icon">
          <BackIcon />
        </span>
        <div className="icon-input">
          <div className="icon">
            <RadioIcon />
          </div>
          <div className="input">
            <Input
              size={"lg"}
              width={"100%"}
              boxShadow={"0px 0px 0px 1px #CDD1DC"}
              background={"#F0F2F6"}
              borderRadius={"6px"}
              readOnly
              value={getAddress?.address1}
            />
            <Input
              size={"lg"}
              width={"100%"}
              boxShadow={"0px 0px 0px 1px #CDD1DC"}
              background={"#F0F2F6"}
              placeholder="Destination address"
              borderRadius={"6px"}
              readOnly
              value={getAddress?.address2}
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <h1>
          Let’s connect you with the <br /> best Walcr around
        </h1>
        <div>
          <FormLabel> Choose your preferred ride</FormLabel>
          <Select
            boxShadow={" 0px 2px 4px 0px #0510370F"}
            size={"lg"}
            border={"1px solid #1a1a1a"}
            focusBorderColor="1px solid #1a1a1a"
          >
            <option value="" disabled hidden>
              Select Event CategoryChoose your preferred ride
            </option>

            <option>Bike</option>
            <option>Electric Scooter</option>
            <option>Car</option>
            <option>Bicycle</option>
          </Select>
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

export { StepTwo };
