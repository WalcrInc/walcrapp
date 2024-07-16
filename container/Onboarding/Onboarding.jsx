import { useState, useEffect } from "react";
import { OnboardingStyle } from "./Onboarding.style";
import { BackIcon, BackIconX, Next_Icon } from "@/assets";
import { useRouter } from "next/router";
import { Page } from "./Home";
import { Options } from "./Options/Options";
import SplashScreen from "./SplashScreen";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0); // Start with 0 for splash screen
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const totalSteps = 5;
  const router = useRouter();

  // Initialize step from local storage if available
  useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  // Save the current step to local storage
  useEffect(() => {
    if (currentStep > 0) {
      localStorage.setItem("currentStep", currentStep.toString());
    }
  }, [currentStep]);

  const handleSplashScreenFinish = () => {
    setShowSplashScreen(false);
    setCurrentStep(1);
  };

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

  console.log(currentStep);

  if (showSplashScreen) {
    return <SplashScreen onFinish={handleSplashScreenFinish} />;
  }


  return (
    <>
      <OnboardingStyle>
        {currentStep === 1 && <Page handleNext={handleNext} />}
        {currentStep === 5 && <Options handleNext={handleNext} />}

        {(currentStep === 2 || currentStep === 3 || currentStep === 4) && (
          <header className="header">
            <span onClick={handlePrev}>
              <BackIconX />
            </span>
          </header>
        )}

        <div className="mainBody">
          <div className="body">
            {currentStep === 2 && (
              <div className="step-one">
                <div className="icon"></div>
                <div className="text">
                  <h1>Lorem ipsum dolor sit amet</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="step-two">
                <div className="icon"></div>
                <div className="text">
                  <h1>Lorem ipsum dolor sit amet</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className="step-three">
                <div className="icon"></div>
                <div className="text">
                  <h1>Lorem ipsum dolor sit amet</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            )}
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
