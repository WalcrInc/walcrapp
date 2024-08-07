import { BackIcon } from "@/assets/index";
import { Button, Input, PinInput, PinInputField } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { OTPStyle } from "./OTP.style";
import Link from "next/link";

const OTP = ({ handlePrev, handleNext }) => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && value.length === 1 && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput.focus();
    }

    if (!value && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput.focus();
    }
  };

  useEffect(() => {
    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text/plain");
      const newValues = pastedData
        .split("")
        .filter((char) => !isNaN(parseInt(char, 10)))
        .slice(0, 4);
      setOtpValues(newValues);
    };

    const pinInput = document.getElementById("pin-input");
    pinInput?.addEventListener("paste", handlePaste);

    return () => {
      pinInput?.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <OTPStyle>
      <span onClick={handlePrev}>
        <BackIcon />
      </span>

      <div className="header">
        <h1> OTP Verification</h1>
        <p>Enter the verification code we just sent on your phone number</p>
      </div>

      <form>
        <div className="form">
          <PinInput id="pin-input">
            {otpValues.map((value, index) => (
              <Input
                textAlign={"center"}
                key={index}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength={1}
                id={`otp-${index}`}
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
          onClick={handleNext}
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
