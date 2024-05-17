import React, { useState } from "react";
import useRegister from "@/hooks/useRegisterHook/useRegister";
import { BasicInfo } from "./Forms/BasicInfo/BasicInfo";
import { OTP } from "./Forms/OTP";
import { Phone } from "./Forms/Phone";
import FinalMap from "./Forms/Map/FinalMap";

const Register = () => {
  const [step, setStep] = useState(1);
  const { formik } = useRegister();

//   // In the Register component
// const [userData, setUserData] = useState({
//   firstname: "",
//   lastname: "",
//   email: "",
//   phone_number: "",
//   address: "",
//   password: ""
// });

// // Function to merge form data from local storage
// const mergeFormData = () => {
//   // Retrieve serialized form data from local storage
//   const formDataStep1 = localStorage.getItem("formDataStep1");
//   const formDataStep2 = localStorage.getItem("formDataStep2");
//   const formDataStep3 = localStorage.getItem("formDataStep3");
//   const formDataStep4 = localStorage.getItem("formDataStep4");

//   // Deserialize form data
//   const parsedFormDataStep1 = JSON.parse(formDataStep1);
//   const parsedFormDataStep2 = JSON.parse(formDataStep2);
//   const parsedFormDataStep3 = JSON.parse(formDataStep3);
//   const parsedFormDataStep4 = JSON.parse(formDataStep4);

//   // Merge form data into one object
//   const mergedData = {
//     ...parsedFormDataStep1,
//     ...parsedFormDataStep2,
//     ...parsedFormDataStep3,
//     ...parsedFormDataStep4
//   };

//   // Update state with merged data
//   setUserData(mergedData);
// };


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
      {step === 2 && <FinalMap handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 3 && <Phone handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 4 && <OTP handlePrev={handlePrev} handleNext={handleNext} />}
     
    </>
  );
};

export { Register };
