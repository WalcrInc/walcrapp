import React, { useState } from "react";
import useRegister from "@/hooks/useRegisterHook/useRegister";
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
    <div
      style={{
        height: "100dvh",
        padding: "0rem 0 3rem",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {step === 1 && <BasicInfo handleNext={handleNext} />}
      {step === 2 && <FinalMap handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 4&& <Phone handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 3 && <OTP handlePrev={handlePrev} handleNext={handleNext} />}
    </div>
  );
};

export { Register };
