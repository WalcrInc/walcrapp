import { BackIcon } from "@/assets/index";
import useRoutes from "@/features/Hooks/Routes/Routes";
import React, { useState } from "react";
import { AddressStyle } from "./Address.style";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThree";

const Address = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <>
      <AddressStyle>
        <div className="body">
          {step === 1 && <StepOne step={step} handleNext={handleNext} />}
          {step === 2 && (
            <StepTwo handleNext={handleNext} handlePrev={handlePrev} />
          )}
          {step === 3 && <StepThree handlePrev={handlePrev} />}
        </div>
      </AddressStyle>
    </>
  );
};

export { Address };
