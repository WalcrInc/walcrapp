import { BackIcon, USA } from "@/assets";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ForgotStyle } from "./Phone.style";
import { useRouter } from "next/router";
import useRoutes from "@/hooks/Routes/Routes";
import Link from "next/link";

const Phone = ({ handleNext, handlePrev }) => {
  const router = useRouter();

  return (
    <ForgotStyle>
      <span onClick={handlePrev}>
        {" "}
        <BackIcon />
      </span>

      <div className="header">
        <h1> Enter your number</h1>
        <p>We’ll send a code for verification</p>
      </div>

      <form>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Phone number
          </FormLabel>
          <Box display={"flex"} gap={"10px"}>
            <Box
              display={"flex"}
              width={"20%"}
              gap={"10px"}
              padding={" 12px"}
              alignItems={"center"}
              borderRadius={"4px"}
              border={"1px solid  #CDD1DC"}
              // border={
              //   formik.errors.phoneNumber
              //     ? "1px solid #FB2047"
              //     : "1px solid  #CDD1DC"
              // }
            >
              <USA />
            </Box>
            <Input
              padding={"25px 14px"}
              type="tel"
              placeholder="Enter phone number"
              // border={
              //   formik.errors.phoneNumber
              //     ? "1px solid #FB2047"
              //     : "1px solid  #CDD1DC"
              // }
              // {...formik.getFieldProps("phoneNumber")}
            />
          </Box>
        </FormControl>
        <Button
          onClick={handleNext}
          border={"none"}
          outline={"none"}
          color={"#fff"}
          background={"#1A1A1A"}
          padding={"25px 14px"}
          borderRadius={"16px"}
        >
          Continue
        </Button>
      </form>
    </ForgotStyle>
  );
};

export { Phone };
