import {
  BackIcon,
  ProgressIcon,
  ShareIcon,
  StarIcon,
  WalletIcon,
} from "Src/Assets/index";
import React from "react";
import { StatusContainer } from "./Style/Status.style";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

const Completed = ({ handlePrev, handleNext }) => {
  return (
    <div>
      <StatusContainer>
        <header>
          <span onClick={handlePrev}>
            <BackIcon />
          </span>
          <h1>Delivery details</h1>
          <span style={{ color: "#fff" }}>.</span>
        </header>
        <div className="section-1">
          <div className="a">
            <div className="icon-text">
              <div className="icon">
                <Image
                  src={"@/Assets/images/profile.svg"}
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
            <div className="c">Completed</div>
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
              <ProgressIcon />
              <div className="body">
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

        <div className="section-2">
          <header>
            <h2>Payment details</h2>
          </header>
          <div className="delivery-info">
            <h2>Thur, Apr 18, 2024</h2>
            <div className="address-time">
              {/* <ProgressIcon /> */}
              <div className="body">
                <div className="a">
                  <p> Delivery fee </p> <p> $45.00</p>
                </div>
                <div className="a">
                  <p> Service charge </p> <p> $5.00</p>
                </div>
                <div className="a">
                  <p> Tip </p> <p> $5.00</p>
                </div>
              </div>
            </div>
            <div className="wallet">
              {" "}
              <h2>
                {" "}
                <WalletIcon /> Wallet
              </h2>
              <p>$5.00</p>
            </div>
          </div>
        </div>
        <Button
          color={"#fff"}
          borderRadius={"8px"}
          width={"100%"}
          //   margin={"0 5%"}
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
          left={"0"}
          background={"#1a1a1a"}
          size={"lg"}
        >
          <ShareIcon /> Share receipt
        </Button>
      </StatusContainer>
    </div>
  );
};

export { Completed };
