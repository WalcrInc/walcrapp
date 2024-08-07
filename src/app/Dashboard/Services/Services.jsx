import React from "react";
import { ServicesStyle } from "./Services.style";
import { ServicesTypes } from "../Service/data";
import { RecieveIcon, SendIcon } from "@/assets/index";
import useRoutes from "@/features/Hooks/Routes/Routes";

const Services = () => {
<<<<<<< HEAD:src/app/Dashboard/Services/Services.jsx
  const { handleTaskWorkerRoute } = useRoutes();
=======

  const { handleTaskWorkerRoute } = useRoutes()
  
>>>>>>> 159f54632072f5ad3ee4ea0b777b3cac67432db1:container/Dashboard/Services/Services.jsx
  return (
    <ServicesStyle>
      <div className="top"></div>
      <div className="bottom">
        <h1>Select delivery type</h1>
        <div className="box" onClick={handleTaskWorkerRoute}>
          <SendIcon />
          <h2>Send a Package</h2>
          <p>I want to send package to someone</p>
        </div>
        <div className="box">
          <RecieveIcon onClick={handleTaskWorkerRoute} />
          <h2> Receive a package</h2>
          <p>I want to pick up a package from someone</p>
        </div>
      </div>
    </ServicesStyle>
  );
};

export { Services };
