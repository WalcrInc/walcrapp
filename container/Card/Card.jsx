import { useEffect, useState } from "react";
import { CardStyle } from "./Card.style";
import { BackIcon, CardIconX, DeleteIconX } from "@/assets";
import { StepOne } from "./Steps/StepOne";
import { StepThree } from "./Steps/StepThree";
import { StepTwo } from "./Steps/StepTwo";
import useRoutes from "@/hooks/Routes/Routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useFetchData, { BASE_URL } from "@/hooks/useFetchDataHook/useFetchData";
import { useRouter } from "next/router";

const stripePromise = loadStripe(
  "pk_test_51PDT6J2M2qi3czW9NkYJBY1Rpjlmh1K9JaUCl0eCAbSVTvDuESpBorKqhUehs1l5dIu27f4mErks2eaaCdxd6Q8n00nX6lhmhK"
);

const Card = () => {
  const { handleDashboardRoute } = useRoutes();
  const [step, setStep] = useState(1);
  const [cards, setCards] = useState(null);
  const router = useRouter();
  const { data, isLoading } = useFetchData({
    url: `${BASE_URL}/wallet/card`,
  });

  useEffect(() => {
    if (data) {
      const cardDetails = data?.data?.card?.details;
      setCards(cardDetails);
      if (cardDetails?.length > 0) {
        setStep(3);
      }
    }
  }, [data]);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (cards?.length > 0 && step === 2) {
      return router.push("/dashboard");
    }
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

        {step === 1 && <span style={{ color: "white" }}>.</span>}
        {step === 2 && (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p>{cards?.length}/5</p>
            <span>
              <CardIconX />
            </span>
          </div>
        )}
        {step === 3 && (
          <span>
            <DeleteIconX />
          </span>
        )}
      </header>

      <div className="body">
        {cards?.length > 0
          ? step === 3 && <StepThree cards={cards} setStep={setStep} />
          : step === 1 && (
              <StepOne
                handleNext={handleNext}
                cards={cards}
                setStep={setStep}
              />
            )}

        {step === 2 && (
          <Elements stripe={stripePromise}>
            <StepTwo handleNext={handleNext} cards={cards} />
          </Elements>
        )}
        {step === 3 && <StepThree cards={cards} setStep={setStep} />}
      </div>
    </CardStyle>
  );
};

export { Card };
