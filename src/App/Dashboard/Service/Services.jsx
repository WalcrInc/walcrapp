import { BackIcon } from "Src/Assets/index";
import React, { useEffect, useState } from "react";
import { ServicesTypes } from "./data";
import { ServiceStyle } from "./Style.style";
import { Button } from "@chakra-ui/react";
import useFetchData, { BASE_URL } from "@/Features/Hooks/useFetchDataHook/useFetchData";
import { useRouter } from "next/router";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [service, setService] = useState([]);
  const [step, setStep] = useState(1);
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
      <header>
        {step === 1 && (
          <>
            <span onClick={handlePrev}>
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
            {service?.map(({ name, _id, icon }) => (
              <div key={_id} className="box" onClick={() => handleClick(name)}>
                <span>{icon}</span>
                <h1>{name}</h1>
                {/* <p>{details}</p> */}
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
