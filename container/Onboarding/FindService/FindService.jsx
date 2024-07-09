import { AddIcon_Big, BackIconX } from "@/assets";
import React, { useState } from "react";
import { FindServicesStyle } from "./FindServices.style";
import { ServicesTypes } from "./data";
import { Button, Select } from "@chakra-ui/react";
import useRoutes from "@/hooks/Routes/Routes";

const FindService = () => {
  const [others, setOthers] = useState(false);

  const handleOthers = () => {
    setOthers(!others);
  };

  const [chosenServices, setChosenServices] = useState([])

  const handleChosenServices = (service) => {

    if (chosenServices.includes(service)) {
      const newServices = chosenServices.filter(serviceName => serviceName !== service);
      setChosenServices(newServices)
    } else {
      setChosenServices((prevServices) => ([...prevServices, service]))
    }
  }

  console.log(chosenServices)
  const { handleHomeRoute, handleLoginRoute } = useRoutes();
  return (
    <FindServicesStyle>
      <main>
        <header>
          <span onClick={handleHomeRoute}>
            <BackIconX />
          </span>

          <h1>Choose the Taskwalker services you would require most often</h1>
          <p>Select at least one</p>
        </header>
        <div className="body">
          <div className="box">
            {ServicesTypes.map((service) => {
              const isChosen = chosenServices.includes(service.name)
              return (
                <div
                  key={service.id}
                  className={`sub-box ${isChosen ? 'service-chosen' : ''}`}
                  onClick={() => {
                    handleChosenServices(service.name)
                  }}
                >
                  <span>{service.icon}</span>
                  <h1>{service.name}</h1>
                  <p>{service.details}</p>
                </div>
              )
            })}
            <div className="others-sub-box" onClick={handleOthers}>
              <span>
                <AddIcon_Big />
              </span>
              <h1>Other</h1>
            </div>
          </div>
        </div>
        <div className="others">
          {others && (
            <>
              <h1>What service do you require?</h1>
              <input
                type="text"
                placeholder="Find any service"
                size={"lg"}
              />
            </>
          )}
        </div>

        <button
          style={{
            padding: "1rem",
            backgroundColor: "#1a1a1a",
            width: "100%",
            borderRadius: "1rem",
            color: "#ffffff",
          }}
          onClick={handleLoginRoute}
        >
          Continue
        </button>
      </main>
    </FindServicesStyle >
  );
};

export { FindService };
