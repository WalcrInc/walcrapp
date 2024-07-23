import { BackIconX, ElsewhereIconLarge, HomeLarge, SearchIconFlipped } from "@/assets";
import React, { useEffect, useState } from "react";
import { ServicesTypes } from "./data";
import { ServiceStyle } from "./Style.style";
import { Box, Button, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import useFetchData, { BASE_URL } from "@/hooks/useFetchDataHook/useFetchData";
import { useRouter } from "next/router";
import { Bubble } from "react-chartjs-2";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [service, setService] = useState([]);
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('home');
  const [searchService, setSearchService] = useState("");
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          {step === 1 && (
            <>
              <span onClick={handlePrev}>
                <BackIconX />
              </span>
              <h1>Select service type</h1>
            </>
          )}
          {step === 2 && (
            <>
              <div className="service_header">
                <span onClick={handlePrev}>
                  <BackIconX />
                </span>
                <p>{selectedService.name}</p>
                <div></div>
              </div>
              <h1>{selectedService.header}</h1>
            </>
          )}
          {step === 3 && (
            <>
              <div className="service_header">
                <span onClick={handlePrev}>
                  <BackIconX />
                </span>
                <p>{selectedService.name}</p>
                <div></div>
              </div>

            </>
          )}
        </header>



        <div className="body">
          {step === 1 && (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                }}
              >
                <div className="search_form">
                  <i><SearchIconFlipped /></i>
                  <input
                    type="text"
                    value={searchService}
                    required
                    placeholder="Search tasks"
                    onChange={(e) => setSearchService(e.target.value)}
                  />
                </div>
              </form>
              <div className="big-box">
                {service?.map(({ name, _id, icon, details }) => (
                  <div key={_id} className="box" onClick={() => handleClick(name)}>
                    <span>{icon}</span>
                    <h1>{name}</h1>
                    <p>{details}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {step === 2 && selectedService && (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                }}
              >
                <div className="search_form">
                  <i><SearchIconFlipped /></i>
                  <input
                    type="text"
                    value={searchService}
                    required
                    placeholder="Search Sub Category"
                    onChange={(e) => setSearchService(e.target.value)}
                  />
                </div>
              </form>
              <div className="questions">
                <div>
                  {selectedService.questions.map((question, index) => (
                    <label key={index}>
                      <p>{question}</p>
                      <input type="radio" />
                    </label>
                  ))}
                </div>

                <button
                  className="black-button"
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {
            step === 3 && (
              <div className="location">
                <div className="location-area">
                  <div>
                    <h1>Where would you like your task completed?</h1>
                    <p className="">Will the task be done at home or somewhere else?</p>
                  </div>

                  <div className="options-container">
                    <label className="option-label">
                      <div className="option-box">
                        <input
                          type="radio"
                          value="home"
                          checked={location === 'home'}
                          onChange={() => setLocation('home')}
                          className="radio-input"
                        />
                        <HomeLarge />
                      </div>
                      <p>Home</p>
                    </label>

                    <label className="option-label">
                      <div className="option-box">
                        <input
                          type="radio"
                          value="elsewhere"
                          checked={location === 'elsewhere'}
                          onChange={() => setLocation('elsewhere')}
                          className="radio-input"
                        />
                        <ElsewhereIconLarge />
                      </div>
                      <p>Somewhere else</p>
                    </label>

                  </div>
                </div>
                <button
                  className="black-button"
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            )
          }

          {step === 4 && (
            <div className="location-tracking">
              <div className="empty"></div>
              <div className="icon"></div>
              <div className="details">
                <h2>Find Taskwalkers near you by allowing location services</h2>
                <p>Turn on Location Services to see Taskwalkers available near you.</p>
              </div>
              <button
                className="black-button"
                onClick={onOpen}
              >
                Allow Access
              </button>
              <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
                <ModalOverlay />
                <ModalContent borderRadius="2xl" margin={"3rem"}>
                  <ModalBody background={"#F0F2F6"} borderRadius={"2xl"} padding={"1rem "}>
                    <VStack>
                      {/* <CheckCircleIcon boxSize={12} color="green.500" /> */}
                      <Text fontSize={"19px"} textAlign={"center"} fontWeight={"700"}>
                        Location is set as primary address
                      </Text>
                      <Text fontSize={"15px"} textAlign={"center"}>
                        You can switch to another address any time in the address settings.
                      </Text>
                      <Box borderBottom={"1px"}></Box>
                      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
                        <Button
                          fontSize={"17px"}
                          fontWeight={"700"}
                          onClick={onClose}
                        >
                          Cancel
                        </Button>
                        <Button
                          fontSize={"17px"}
                          fontWeight={"700"}
                          onClick={onClose}
                        >
                          Continue
                        </Button>
                      </Box>
                    </VStack>
                  </ModalBody>
                </ModalContent>
              </Modal>

            </div>
          )}
        </div>
      </main>
    </ServiceStyle >
  );
};

export { Service };
