import { useState } from "react";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { StepThree } from "./Steps/StepThree";
import { TaskWorkerStyle } from "./FindTaskworker.style";
import useRoutes from "Src/Components/hooks/Routes/Routes";

const FindTaskworker = () => {
  const [step, setStep] = useState(1);
  const { handleDashboardRoute } = useRoutes();
  const handleNext = () => {
    setStep((prevState) => prevState + 1);
  };
  const handlePrev = () => {
    if (step === 1) {
      handleDashboardRoute();
    } else {
      setStep((prevState) => prevState - 1);
    }
  };
  return (
    <TaskWorkerStyle>
      {step === 1 && (
        <StepOne handleNext={handleNext} handlePrev={handlePrev} />
      )}
      {step === 2 && (
        <StepTwo handleNext={handleNext} handlePrev={handlePrev} />
      )}
      {step === 3 && <StepThree />}
    </TaskWorkerStyle>
  );
};

export { FindTaskworker };
