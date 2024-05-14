import { useState } from "react";
import { CardStyle } from "./Card.style";
import { BackIcon } from "@/assets";
import { StepOne } from "./Steps/StepOne";
import { StepThree } from "./Steps/StepThree";
import { StepTwo } from "./Steps/StepTwo";
import useRoutes from "@/hooks/Routes/Routes";

const Card = () => {
  const { handleDashboardRoute } = useRoutes();
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };
  const headerText = () => {
    switch (step) {
      case 1:
        return "Saved Cards";
      case 2:
        return "Add new card";
      case 3:
        return "Cards";
      default:
        return "";
    }
  };
  return (
    <CardStyle>
      <header>
        {step === 1 && (
          <span onClick={handleDashboardRoute}>
            <BackIcon />
          </span>
        )}
        {step !== 1 && (
          <span onClick={handlePrev}>
            <BackIcon />
          </span>
        )}
        <h1>{headerText()}</h1>

        <span style={{ color: "white" }}>.</span>
      </header>

      <div className="body">
        {step === 1 && <StepOne handleNext={handleNext} />}
        {step === 2 && <StepTwo handleNext={handleNext} />}
        {step === 3 && <StepThree />}
      </div>
    </CardStyle>
  );
};

export { Card };
