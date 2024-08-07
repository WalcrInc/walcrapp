import React, { useState } from "react";
import Link from "next/link";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import Image from "next/image";
import { Radio, RadioGroup } from "@chakra-ui/react";
import style from "@/app/TaskWalcr/Gig/Pages/Style.module.css";
import bicycle from "@/assets/images/bicycle.png";
import car from "@/assets/images/car.png";
import bike from "@/assets/images/bikes.png";
import truck from "@/assets/images/trucks.png";
import Map from "@/assets/images/gigMap.png";
import { LocationIconInput } from "@/components/Input/IconInput";

const Range = () => {
  const [value, setValue] = useState();

  const [value2, setValue2] = useState();
  return (
    <div style={{ marginBottom: "40px" }} className={style.Container}>
      <div>
        <h1>Means of Transportation</h1>
        <p style={{ fontSize: "16px" }}>
          Name is private and will be used for your private listing.
        </p>
        <div>
          <RadioGroup onChange={setValue} value={value}>
            <div className={style.RadioContainer}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={bicycle} alt="range" className={style.Image} />
                <div>
                  <h1>Bicycles/Scooters</h1>
                  <p>5-10 miles Service range</p>
                </div>
              </div>

              <Radio size="lg" colorScheme="orange" value="1"></Radio>
            </div>

            <div className={style.RadioContainer}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={car} alt="range" className={style.Image} />
                <div>
                  <h1>Cars</h1>
                  <p>10-20 miles Service range</p>
                </div>
              </div>

              <Radio size="lg" colorScheme="orange" value="2"></Radio>
            </div>

            <div className={style.RadioContainer}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={bike} alt="range" className={style.Image} />
                <div>
                  <h1>Cargo Bikes</h1>
                  <p>8-15 miles Service range</p>
                </div>
              </div>

              <Radio size="lg" colorScheme="orange" value="3"></Radio>
            </div>

            <div className={style.RadioContainer}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={truck} alt="range" className={style.Image} />
                <div>
                  <h1>Delivery Van/Trucks</h1>
                  <p>20-40 miles Service range</p>
                </div>
              </div>

              <Radio size="lg" colorScheme="orange" value="4"></Radio>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h1>Visibility Radius</h1>
        <p style={{ fontSize: "16px" }}>
          Your delivery zone is set from your residential location. Search
          location to change delivery zone.
        </p>

        <div>
          <LocationIconInput />
          <Image src={Map} alt="range" className={style.Image} />
          <p style={{ fontSize: "13px" }}>
            <span style={{ color: "orange" }}> * </span> Maximum range is based
            on the selected means of transportation
          </p>
        </div>

        <div>
          <RadioGroup onChange={setValue2} value={value2}>
            <div className={style.RadioContainer} style={{ border: "none" }}>
              <div>
                <h1>Suggested service range</h1>
                <p style={{ fontSize: "14px" }}>
                  Name is private and will be use for your private listing..
                </p>
              </div>
              <Radio size="lg" colorScheme="orange" value="1"></Radio>
            </div>

            <div
              className={style.RadioContainer}
              style={{ border: "none", marginTop: "-10px" }}
            >
              <div>
                <h1>Custom service range</h1>
                <p style={{ fontSize: "14px" }}>
                  Name is private and will be use for your private listing..
                </p>
              </div>
              <Radio size="lg" colorScheme="orange" value="2"></Radio>
            </div>
          </RadioGroup>
          <Slider
            aria-label="slider-ex-2"
            colorScheme="orange"
            defaultValue={30}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Range;
