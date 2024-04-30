import { BackIcon } from "@/assets";
import { Button, PinInput, PinInputField } from "@chakra-ui/react";
import React, { useState } from "react";
import { OTPStyle } from "./OTP.style";
import Link from "next/link";

const OTP = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (index === 3 && value != "") {
      const inputFields = document.querySelectorAll(".input-field");
      inputFields.forEach((field, i) => {
        if (1 > index) {
          field.setAttribute("disabled", "true");
        }
      });
    }
  };

  return (
    <OTPStyle>
      <Link href={"/forgot-password"}>
        <BackIcon />
      </Link>

      <div className="header">
        <h1> OTP Verification</h1>
        <p>Enter the verification code we just sent on your phone number</p>
      </div>

      <form>
        <div className="form">
          {" "}
          <PinInput>
            {otpValues.map((value, index) => (
              <PinInputField
                key={index}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength={1}
                className="input-field"
                width={"87px"}
                height={"72px"}
                background={"#E6E6E6"}
                border={"none"}
                outline={"none"}
                fontSize={"34px"}
                fontWeight={"700"}
                focusBorderColor="0.5px solid #CDD1DC"
                _focus={{
                  border: "2px solid #1A1A1A",
                  outline: "none",
                }}
              />
            ))}
          </PinInput>
        </div>

        <Button
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

      <div className="timer">
        <p> Resend OTP in 20s</p>
        <span>Resend OTP </span>
      </div>
    </OTPStyle>
  );
};

export { OTP };
