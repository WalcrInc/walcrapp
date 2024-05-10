import React, { useState } from "react";
import useRegister from "@/hooks/useRegisterHook/useRegister";
import { BasicInfo } from "./Forms/BasicInfo/BasicInfo";
import { OTP } from "./Forms/OTP";
import { Phone } from "./Forms/Phone";
import FinalMap from "./Forms/Map/FinalMap";

const Register = () => {
  const [step, setStep] = useState(1);
  const { formik } = useRegister();

  console.log(formik.values.firstname);
  let data;
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    console.log("object");
    data =
      typeof window !== "undefined" &&
      localStorage.setItem("data", JSON.stringify(formik.values));
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
    console.log("object");
  };

  return (
    <>
      {step === 1 && <BasicInfo handleNext={handleNext} />}
      {step === 2 && <Phone handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 3 && <OTP handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 4 && <FinalMap handlePrev={handlePrev} handleNext={handleNext} />}
    </>
  );
};

export { Register };
