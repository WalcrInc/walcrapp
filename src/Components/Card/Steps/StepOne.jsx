import { Button } from "@chakra-ui/react";
import React from "react";
import Wallet from "@/Assets/images/Wallet.svg";
import Image from "next/image";

const StepOne = ({ handleNext }) => {
  return (

    <div className="step-1">
      <Image
        width={300}
        height={300}
        src={Wallet}
        alt="wallet"
        objectFit="contain"
        className="image"
      />
      <div className="text">
        <h1>No saved card</h1>
        <p> Looks like you haven’t saved any credit card yet.</p>
      </div>

      <Button
        background={"#1A1A1A"}
        color={"#fff"}
        borderRadius={"8px"}
        size={"lg"}
        onClick={handleNext}
      >
        Add Card
      </Button>
    </div>
  );
};

export { StepOne };
