import { useState } from "react";
import { OnboardingStyle } from "./Onboarding.style";
import { BackIcon, Logo, Next_Icon, Truck } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import { StackDivider, VStack } from "@chakra-ui/react";
import { Page } from "./Home";
import { Options } from "./Options/Options";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const router = useRouter();

  const handleNext = () => {
    if (currentStep === totalSteps) {
      return router.push("/login");
    }
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleRoute = () => {
    return router.push("/login");
  };

  return (
    <>
      {currentStep === 1 && <Page handleNext={handleNext} />}
      {currentStep === 5 && <Options handleNext={handleNext} />}
      <OnboardingStyle>
        {currentStep === 2 && (
          <header className="header">
            {/* <span onClick={handlePrev}>
            <BackIcon />
          </span>
          <p onClick={handleRoute}>Skip</p> */}
          </header>
        )}
        {(currentStep === 3 || currentStep === 4) && (
          <header className="header">
            <span onClick={handlePrev}>
              <BackIcon />
            </span>
            <p onClick={handleRoute}>Skip</p>
          </header>
        )}

        <div className="bottom">
          <div className="body">
            <div className="step-one">
              {currentStep === 2 && (
                <>
                  <div className="icon"></div>
                  <div className="text">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="step-two">
              {currentStep === 3 && (
                <>
                  <div className="icon"></div>
                  <div className="text">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="step-three">
              {currentStep === 4 && (
                <>
                  <div className="icon"></div>
                  <div className="text">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          {(currentStep === 2 || currentStep === 3 || currentStep === 4) && (
            <div className="indicator">
              <div className="page-indicator">
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className={currentStep === index + 2 ? "active" : ""}
                  ></span>
                ))}
              </div>
              <div className="next">
                <span onClick={handleNext}>
                  <Next_Icon />
                </span>
              </div>
            </div>
          )}
        </div>
      </OnboardingStyle>
    </>
  );
};

export { Onboarding };
