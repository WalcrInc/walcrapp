import { AddIcon_Big, BackIcon } from "Src/Assets/index";
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

  const { handleHomeRoute, handleLoginRoute } = useRoutes();
  return (
    <FindServicesStyle>
      <header>
        <span onClick={handleHomeRoute}>
          <BackIcon />
        </span>

        <h1>Choose the Taskwalker services you would require most often</h1>
        <p>Select at least one</p>
      </header>
      <div className="body">
        <div className="box">
          {ServicesTypes.map((service, index) => (
            <div className="sub-box" key={index}>
              <span>{service.icon}</span>
              <h1>{service.name}</h1>
              <p>{service.details}</p>
            </div>
          ))}
          <div className="sub-box" onClick={handleOthers}>
            <span>
              <AddIcon_Big />
            </span>
            <h1>Others</h1>
          </div>
        </div>
      </div>
      <div className="others">
        {others && (
          <>
            <h1>What service do you require?</h1>
            <Select box-shadow="0px 0px 0px 1px #CDD1DC" size={"lg"}>
              <option>heyy</option>
            </Select>
          </>
        )}
      </div>

      <Button
        size={"lg"}
        background={"#1a1a1a"}
        color={"#fff"}
        // position={"fixed"}
        // bottom={"20px"}
        width={"100%"}
        // margin={"0 5%"}
        borderReadius={"16px"}
        // left={"0"}
        onClick={handleLoginRoute}
      >
        Continue
      </Button>
    </FindServicesStyle>
  );
};

export { FindService };
