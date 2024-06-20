import React from "react";
import { ServicesStyle } from "./Services.style.js";
import { ServicesTypes } from "../Service/data";
import services from "@/Pages/dashboard/services";
import { RecieveIcon, SendIcon } from "@/Assets";
import useRoutes from "@/hooks/Routes/Routes";

const Services = () => {

  const {handleTaskWorkerRoute} =   useRoutes()
  return (
    <ServicesStyle>
      <div className="top"></div>
      <div className="bottom">
        <h1>Select  delivery type</h1>
        <div className="box" onClick={handleTaskWorkerRoute}>
          <SendIcon />
          <h2>Send a Package</h2>
          <p>I want to send package to someone</p>
        </div>
        <div className="box">
          <RecieveIcon onClick={handleTaskWorkerRoute}/>
          <h2> Receive a package</h2>
          <p>I want to pick up a package from someone</p>
        </div>
      </div>
    </ServicesStyle>
  );
};

export { Services };
