import React from "react";
import Image from "next/image";
import {
  InputGroup,
  Input,
  FormLabel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Textarea,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import Upload from "@/assets/images/uploadIcon.svg";
import style from "@/app/TaskWalcr/Gig/Pages/Style.module.css";

const Assembly = () => {
  return (
    <div style={{ marginBottom: "40px" }} className={style.Container}>
      <div>
        <div
          style={{
            width: "100%",
            height: "100px",
            border: "1px solid #000",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "25px",
            marginBottom: "15px",
          }}
        >
          <span>
            All these will be listed under this gig in the marketplace
          </span>
          <div></div>
        </div>

        <Checkbox colorScheme="orange">
          Equipment or Tools required for task?
        </Checkbox>

        <h1>Price</h1>
        <p>Choose price range from the lowest gig price to highest</p>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[10, 30]}
          colorScheme="orange"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>

        <div>
          <h1>Gig description</h1>
          <Textarea placeholder="Write Something.."></Textarea>
        </div>

        <div>
          <h1>Add Image Gigs</h1>
          <div
            style={{
              width: "100%",
              height: "70px",
              display: "grid",
              placeContent: "center",
              border: "1px dashed #000",
              borderRadius: "10px",
            }}
          >
            <Image src={Upload} style={{ width: "50px" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assembly;
