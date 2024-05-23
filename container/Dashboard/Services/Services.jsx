import React from "react";
import { ServicesStyle } from "./Services.style";
import { ServicesTypes } from "./data";
import services from "@/pages/dashboard/services";
import { RecieveIcon, SendIcon } from "@/assets";

const Services = () => {
  return (
    <ServicesStyle>
      <div className="top"></div>
      <div className="bottom">
        <div className="box">
          <SendIcon />
          <h2>Send a Package</h2>
          <p>I want to send package to someone</p>
        </div>
        <div className="box">
          <RecieveIcon />
          <h2> Receive a package</h2>
          <p>I want to pick up a package from someone</p>
        </div>
      </div>
    </ServicesStyle>
  );
};

export { Services };
