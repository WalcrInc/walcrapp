import {
  BackIconX,
  ElsewhereIconLarge,
  HomeLarge,
  SearchIconFlipped,
} from "@/assets";
import React, { useEffect, useState } from "react";
import { ServicesTypes } from "./data";
import { ServiceStyle } from "./Style.style";
import useFetchData, { BASE_URL } from "@/hooks/useFetchDataHook/useFetchData";
import { useRouter } from "next/router";
import { Bubble } from "react-chartjs-2";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [service, setService] = useState([]);
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("home");
  const [searchService, setSearchService] = useState("");
  const router = useRouter();

  const handleClick = (serviceName) => {
    const selectedService = service.find(
      (service) => service.name === serviceName
    );
    setSelectedService(selectedService);

    setStep((prev) => prev + 1);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handlePrev = () => {
    if (step === 1) {
      router.push("/dashboard");
    } else {
      setStep((prev) => prev - 1);
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleNext = () => {
    if (step !== 5) {
      setStep((prev) => prev + 1);
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const { data } = useFetchData({ url: `${BASE_URL}/service` });

  useEffect(() => {
    if (data) {
      const servicesWithIcons = data.data.map((service) => {
        const localService = ServicesTypes.find(
          (localService) => localService.name === service.name
        );
        return {
          ...service,
          icon: localService ? localService.icon : null,
        };
      });
      setService(servicesWithIcons);
    }
  }, [data]);

  return (
    <ServiceStyle>
      <main>
        <header>
          {step === 1 && (
            <div className="step_one_header">
              <span onClick={handlePrev}>
                <BackIconX />
              </span>
              <h1>Book Taskwalker</h1>
              <div></div>
            </div>
          )}
          {step === 2 && (
            <>
              <div className="service_header">
                <span onClick={handlePrev}>
                  <BackIconX />
                </span>
                <h1>{selectedService.name}</h1>
                <div></div>
              </div>
              <p>{selectedService.header}</p>
            </>
          )}
          {step === 3 && (
            <>
              <div className="service_header">
                <span onClick={handlePrev}>
                  <BackIconX />
                </span>
                {/* <h1>{selectedService.name}</h1>
                <div></div> */}
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <div className="service_header">
                <span onClick={handlePrev}>
                  <BackIconX />
                </span>
                {/* <h1>{selectedService.name}</h1>
                <div></div> */}
              </div>
              <p>Take a clear picture of the task or you need help with</p>
              <p className="small_paragraph">
                This will allow us to give you a precise estimate of the task's
                duration and charges.
              </p>
            </>
          )}
        </header>

        <div className="body">
          {step === 1 && (
            <StepOne
              searchService={searchService}
              setSearchService={setSearchService}
              service={service}
              handleClick={handleClick}
            />
          )}
          {step === 2 && selectedService && (
            <StepTwo
              searchService={searchService}
              setSearchService={setSearchService}
              handleNext={handleNext}
              selectedService={selectedService}
            />
          )}

          {step === 3 && <StepThree handleNext={handleNext} />}
          {step === 4 && <StepFour handleNext={handleNext} />}
        </div>
      </main>
    </ServiceStyle>
  );
};

export { Service };
