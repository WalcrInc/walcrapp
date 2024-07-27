import { BackIconX } from "@/assets";
import React, { useEffect, useState } from "react";
import { ServicesTypes } from "./data";
import { ServiceStyle } from "./Style.style";
import useFetchData, { BASE_URL } from "@/hooks/useFetchDataHook/useFetchData";
import { useRouter } from "next/router";
import { Bubble } from "react-chartjs-2";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

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
    if (step !== 4) {
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
          <>
            <div className="service_header">
              <span onClick={handlePrev}>
                <BackIconX />
              </span>
              <h1
                style={{
                  display: `${step === 1 || step === 2 ? "" : "none"}`,
                }}
              >
                {selectedService?.name}
              </h1>
              <div></div>
            </div>
            {step === 2 && <p>{selectedService.header}</p>}
          </>
        </header>

        <div className="body">
          {step === 1 && (
            <StepOne
              handleClick={handleClick}
              service={service}
              searchService={searchService}
              setSearchService={setSearchService}
            />
          )}
          {step === 2 && selectedService && (
            <StepTwo
              selectedService={selectedService}
              handleNext={handleNext}
              searchService={searchService}
              setSearchService={setSearchService}
            />
          )}

          {step === 3 && <StepThree handleNext={handleNext} />}
        </div>
      </main>
    </ServiceStyle>
  );
};

export { Service };
