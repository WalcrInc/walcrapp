import { BackIcon, ProgressIcon, StarIcon } from "@/assets/index";
import React from "react";
import { StatusContainer } from "./Style/Status.style";
import profile from "@/assets/images/profile.svg";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

const Ongoing = ({ handlePrev }) => {
  return (
    <StatusContainer>
      <header>
        <span onClick={handlePrev}>
          <BackIcon />
        </span>
        <h1>Ongoing task</h1>
        <span style={{ color: "#fff" }}>.</span>
      </header>
      <div className="section-1">
        <div className="a">
          <div className="icon-text">
            <div className="icon">
              <Image
                src={profile}
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
          <div className="b">Ongoing</div>
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
        </div>
      </div>
      <Button
        color={"#fff"}
        borderRadius={"8px"}
        width={"90%"}
        margin={"0 5%"}
        left={"0"}
        background={"#1a1a1a"}
        size={"lg"}
        position={"fixed"}
        bottom={"25px"}
      >
        Share receipt
      </Button>
    </StatusContainer>
  );
};

export { Ongoing };
