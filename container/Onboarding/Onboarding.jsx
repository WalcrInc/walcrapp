import { useState } from "react";
import { OnboardingStyle } from "./Onboarding.style";
import { BackIcon, Logo, Next_Icon, Truck } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;
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
    <OnboardingStyle >
      <header>
        {currentStep === 2 && (
          <header className="header">
            <span onClick={handlPrev}>
              <BackIcon />
            </span>

            <p onClick={handleRoute}>Skip</p>
          </header>
        )}
      </header>
      
      <div className="icons">
        {currentStep === 1 && (
          <>
            <div className="icon">
              <Image
                src={"/images/dress.svg"}
                width={611}
                height={0}
                objectFit="contain"
                className="image"
              />
            </div>
          </>
        )}
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
          </>
        )}
      </div>

      <div className="bottom">
        {currentStep === 1 && (
          <div className="text">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        )}
        {currentStep === 2 && (
          <div className="text">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        )}

        <div className="indicator">
          <div className="page-indicator">
            {[...Array(totalSteps)].map((_, index) => (
              <span
                key={index}
                className={currentStep === index + 1 ? "active" : ""}
              ></span>
            ))}
          </div>
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
