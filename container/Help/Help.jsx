import React, { useState } from "react";
import { HelpStyle } from "./Help.style";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepFour } from "./Steps/StepFour";
import { StepFive } from "./Steps/StepFive";
import { StepThree } from "./Steps/StepThree";

const Help = () => {
  const [step, setStep] = useState(5);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelected = (message) => {
    setSelectedMessage(message);
    setStep(2);
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <HelpStyle>
      <div className="body">
        {step === 1 && (
          <StepOne
            handleSelected={handleSelected}
            step={step}
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <>
            {" "}
            <StepTwo
              handleNext={handleNext}
              setStep={setStep}
              handlePrev={handlePrev}
            />
          </>
        )}
        {step === 3 && (
          <>
            {" "}
            <StepThree
              setStep={setStep}
            />
          </>
        )}
        {step === 4 && (
          <>
            {" "}
            <StepFour
              setStep={setStep}
            />
          </>
        )}
        {step === 5 && (
          <>
            {" "}
            <StepFive
              setStep={setStep}
            />
          </>
        )}
      </div>
    </HelpStyle>
  );
};

export { Help };
