import { Button } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import useRoutes from "@/hooks/Routes/Routes";
import { BackIcon } from "Src/Assets/index";

const StepOne = ({ handleNext, step }) => {
    const { handleDashboardRoute } = useRoutes();
  return (
    <div style={{padding:"6%"}}>
      {" "}
      <div className="header">
        {step === 1 && (
          <>
            <span onClick={handleDashboardRoute}>
              <BackIcon />
            </span>

            <h1>Address</h1>
            <span style={{ color: "white" }}>.</span>
          </>
        )}
      </div>
      <div className="step-1">
        <Image
          width={300}
          height={300}
          src={"@/Assets/images/address.svg"}
          alt="wallet"
          objectFit="contain"
          className="image"
        />
        <div className="text">
          <h1>No saved address</h1>
          <p> Looks like you haven’t saved any credit card yet.</p>
        </div>

        <Button
          background={"#1A1A1A"}
          color={"#fff"}
          borderRadius={"8px"}
          size={"lg"}
          onClick={handleNext}
        >
          Add a new address
        </Button>
      </div>
    </div>
  );
};

export { StepOne };
