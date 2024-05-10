import { BackIcon, USA } from "@/assets";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ForgotStyle } from "./Phone.style";
import { useRouter } from "next/router";
import { useFormik } from "formik";

const Phone = ({ handleNext, handlePrev }) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      phone_number: "+1",
    },
    validate: (values) => {
      const errors = {};

      if (!values.phone_number === "") {
        errors.phone_number = "Required";
      } else if (!/^\+1\d{10}$/.test(values.phone_number)) {
        errors.phone_number = "Invalid US number";
      }
    },
  });

  const handleSubmit = () => {
    if (formik.isValid) {
      const serializedData = JSON.stringify(formik.values);
      localStorage.setItem("formDataStep2", serializedData);
      handleNext(formik.values);
    }
  };

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

      <form onSubmit={handleSubmit}>
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
              border={
                formik.errors.phone_number
                  ? "1px solid #FB2047"
                  : "1px solid  #CDD1DC"
              }
            >
              <USA />
            </Box>
            <Input
              padding={"25px 14px"}
              type="tel"
              placeholder="Enter phone number"
              border={
                formik.errors.phone_number
                  ? "1px solid #FB2047"
                  : "1px solid  #CDD1DC"
              }
              {...formik.getFieldProps("phone_number")}
            />
          </Box>
        </FormControl>
        <Button
          border={"none"}
          outline={"none"}
          color={"#fff"}
          background={"#1A1A1A"}
          padding={"25px 14px"}
          borderRadius={"16px"}
          type="submit"
        >
          Continue
        </Button>
      </form>
    </ForgotStyle>
  );
};

export { Phone };
