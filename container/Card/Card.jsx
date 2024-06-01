import { useState } from "react";
import { CardStyle } from "./Card.style";
import { BackIcon } from "@/assets";
import { StepOne } from "./Steps/StepOne";
import { StepThree } from "./Steps/StepThree";
import { StepTwo } from "./Steps/StepTwo";
import useRoutes from "@/hooks/Routes/Routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripPromise = loadStripe("pk_test_51PDT6J2M2qi3czW9NkYJBY1Rpjlmh1K9JaUCl0eCAbSVTvDuESpBorKqhUehs1l5dIu27f4mErks2eaaCdxd6Q8n00nX6lhmhK");
// console.log(process.env.STRIPE_PUBLIC_KEY)

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
        {step === 2 && (
          <>
            <Elements stripe={stripPromise}>
              <StepTwo handleNext={handleNext} />
            </Elements>
          </>
        )}
        {step === 3 && <StepThree />}
      </div>
    </CardStyle>
  );
};

export { Card };