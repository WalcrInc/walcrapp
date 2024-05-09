import { useState } from "react";
import { OnboardingStyle } from "./Onboarding.style";
import { BackIcon, Logo, Next_Icon, Truck } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const router = useRouter();

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleRoute = () => {
    return router.push("/login");
  };

  return (
    <OnboardingStyle>
      {(currentStep === 2 || currentStep === 3) && (
        <header className="header">
          <span onClick={handlPrev}>
            <BackIcon />
          </span>
          <p onClick={handleRoute}>Skip</p>
        </header>
      )}

      <div className="step-two">
        {currentStep === 1 && (
          <>
            <div className="icon">
              <Image
                src={"/images/one.svg"}
                width={355}
                height={404}
                alt="bike"
                objectFit="contain"
              />
            </div>
            <div className="text">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </>
        )}
      </div>

      <div className="step-two">
        {currentStep === 2 && (
          <>
            <div className="icon">
              <Image
                src={"/images/person.svg"}
                width={355}
                height={404}
                alt="bike"
                objectFit="contain"
              />
            </div>
            <div className="text">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </>
        )}
      </div>

     
        {currentStep === 3 && (
         <div className="step-two">
            <div className="icon">
              <Image
                src={"/images/person.svg"}
                width={355}
                height={404}
                alt="bike"
                objectFit="contain"
              />
            </div>
            <div className="text">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        )}
    

      <div className="bottom">
        <div className="page-indicator">
          {[...Array(totalSteps)].map((_, index) => (
            <span
              key={index}
              className={currentStep === index + 1 ? "active" : ""}
            ></span>
          ))}
        </div>
        <div className="next">
          {currentStep === totalSteps ? (
            <span onClick={handleRoute}>
              <Next_Icon />
            </span>
          ) : (
            <span onClick={handleNext}>
              <Next_Icon />
            </span>
          )}
        </div>
      </div>
    </OnboardingStyle>
  );
};

export { Onboarding };
