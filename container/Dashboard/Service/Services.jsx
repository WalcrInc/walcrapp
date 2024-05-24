import { BackIcon } from "@/assets";
import React, { useState } from "react";
import { ServicesTypes } from "./data";
import { ServiceStyle } from "./Style.style";
import { Button } from "@chakra-ui/react";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [step, setStep] = useState(1);

  const handleClick = (serviceName) => {
    const selectedService = ServicesTypes.find(
      (service) => service.name === serviceName
    );
    setSelectedService(selectedService);
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <ServiceStyle>
      <header>
        {step === 1 && (
          <>
            <span>
              <BackIcon />
            </span>
            <h1>Select service type</h1>
          </>
        )}
        {step === 2 && (
          <>
            <span onClick={handlePrev}>
              <BackIcon />
            </span>
            <h1>{selectedService.header}</h1>
          </>
        )}
      </header>

      <div className="body">
        {step === 1 && (
          <div className="big-box">
            {ServicesTypes.map(({ id, icon, name, details }) => (
              <div key={id} className="box" onClick={() => handleClick(name)}>
                <span>{icon}</span>
                <h1>{name}</h1>
                <p>{details}</p>
              </div>
            ))}
          </div>
        )}
        {step === 2 && selectedService && (
          <div className="questions">
            <div>
              {selectedService.questions.map((question, index) => (
                <label key={index}>
                  <p>{question}</p>
                  <input type="radio" />
                </label>
              ))}
            </div>

            <Button
              size={"lg"}
              width={"100%"}
              color={"#fff"}
              background={"#1a1a1a"}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </ServiceStyle>
  );
};

export { Service };