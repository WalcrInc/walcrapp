import { Button } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const StepOne = ({ handleNext }) => {
  return (

    <div className="step-1">
      <Image
        width={300}
        height={300}
        src={"/images/Wallet.svg"}
        alt="wallet"
        objectFit="contain"
        className="image"
      />
      <div className="text">
        <h1>No saved card</h1>
        <p> Looks like you haven’t saved any credit card yet.</p>
      </div>

      <button
        style={{
          background: "#1a1a1a",
          color: "#fff",
          padding: "1rem",
          width: "100%",
          borderRadius: "1rem",
          fontWeight: "700"
        }}
        onClick={handleNext}
      >
        Add a new card
      </button>
    </div >
  );
};

export { StepOne };
