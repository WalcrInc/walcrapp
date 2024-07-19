import {
  BackIconX,
  ProgressIcon,
  ShareIcon,
  StarIcon,
  WalletIcon,
} from "@/assets";
import React from "react";
import { StatusContainer } from "./Style/Status.style";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

const InTransit = ({ handlePrev, handleNext }) => {
  return (
    <StatusContainer>
      <header>
        <span onClick={handlePrev} style={{ marginLeft: "-8px" }}>
          <BackIconX />
        </span>
        <h1>Ongoing Task</h1>
        <span style={{ color: "#fff" }}>.</span>
      </header>
      <div className="section-1">
        <div className="a">
          <div className="icon-text">
            <div className="icon">
              <Image
                src={"/images/profile.svg"}
                height={55}
                width={55}
                alt="profile-picture"
              />
            </div>
            <div className="text">
              <h1> Delivery with Adam</h1>
              <div className="sub-text">
                <p>9945XDP</p>
                <span className="rating">
                  {" "}
                  <StarIcon /> 5.0
                </span>
              </div>
            </div>
          </div>
          <div className="d">On going</div>
        </div>
      </div>
      <div className="section-2">
        <header>
          <h2>Delivery details</h2>
        </header>

        <hr className="hr" />
        <div className="delivery-info">
          <h2>Thur, Apr 18, 2024</h2>
          <div className="address-time">
            <i><ProgressIcon /></i>
            <div className="address-info">
              <div className="a">
                <p> 4767 Bernardo Street, </p> <p> 06:07</p>
              </div>
              <div className="a">
                <p> 4767 Bernardo Street, </p> <p> 06:30</p>
              </div>
            </div>
          </div>

          <Button
            border={"1px solid #FB2047"}
            background={"transparent"}
            width={"100%"}
            size={"lg"}
            color={"#FB2047"}
            fontSize={"14px"}
            fontWeight={"800"}
            onClick={handleNext}
          >
            Report an issue
          </Button>
        </div>
      </div>
    </StatusContainer>
  );
};

export { InTransit };
