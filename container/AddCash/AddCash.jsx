import React, { useState } from "react";
import { AddCashStyle } from "./AddCash.style";
import { Button } from "@chakra-ui/react";
import { BackIcon, DeleteIcon } from "@/assets";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import useRoutes from "@/hooks/Routes/Routes";

const AddCash = () => {
  const { handleDashboardRoute } = useRoutes();
  const [input, setInput] = useState("");
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleNumberInput = (number) => {
    if (number === "." && input.includes(".")) {
      return;
    }

    setInput((prevInput) => {
      if (!prevInput && number === ".") return "$0.";
      if (!prevInput && number !== "0") return "$" + number;
      return prevInput + number;
    });
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleSubmit = () => {
    handleNext();
  };

  return (
    <AddCashStyle>
      <header>
        {step === 1 ? (
          <span onClick={handleDashboardRoute}>
            <BackIcon />
          </span>
        ) : (
          <span onClick={handlePrev}>
            <BackIcon />
          </span>
        )}

        <h1>Add cash</h1>
        <span style={{ color: "white" }}>.</span>
      </header>
     

      {step === 1 && (
        <StepOne
          handleBackspace={handleBackspace}
          input={input}
          handleNumberInput={handleNumberInput}
          handleSubmit={handleSubmit}
        />
      )}
      {step === 2 && (
        <StepTwo
          handleBackspace={handleBackspace}
          input={input}
          handleNumberInput={handleNumberInput}
          handleSubmit={handleSubmit}
        />
      )}
    </AddCashStyle>
  );
};

export { AddCash };
