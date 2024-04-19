import { useState } from "react";
import { OnboardingStyle } from "./Onboarding.style";
import { Logo, Next_Icon, Truck } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Total number of steps in the onboarding process
  const router = useRouter();

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleRoute = () => {
    return router.push("/login");
  };

  return (
    <OnboardingStyle>
      <div className="logo">
        <Logo />
      </div>

      <div className="text">
        {currentStep === 1 && (
          <>
            <div className="icon">
              <Image
                src={"/images/car.svg"}
                width={355}
                height={148}
                alt="bike"
              />
            </div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </>
        )}
        {currentStep === 2 && (
          <>
            <div className="icon">
              <Image
                src={"/images/car.svg"}
                width={355}
                height={148}
                alt="bike"
                objectFit="contain"
              />
            </div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </>
        )}
        {currentStep === 3 && (
          <>
            <div className="icon">
              <Image
                src={"/images/takeout.svg"}
                width={355}
                height={148}
                alt="bike"
                objectFit="cover"
              />
            </div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </>
        )}
      </div>

      <div className="bottom">
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
    </OnboardingStyle>
  );
};

export { Onboarding };
