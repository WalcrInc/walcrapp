import React, { useState } from "react";
import useRegister from "@/Features/Hooks/useRegisterHook/useRegister";
import { BasicInfo } from "./Forms/BasicInfo/BasicInfo";
import { OTP } from "./Forms/OTP";
import { Phone } from "./Forms/Phone";
import FinalMap from "./Forms/Map/FinalMap";

const Register = () => {
  const [step, setStep] = useState(1);
  const { formik } = useRegister();

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      {step === 1 && <BasicInfo handleNext={handleNext} />}
      {step === 2 && (
        <FinalMap handlePrev={handlePrev} handleNext={handleNext} />
      )}
      {step === 3 && <Phone handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 4 && <OTP handlePrev={handlePrev} handleNext={handleNext} />}
    </>
  );
};

export { Register };
