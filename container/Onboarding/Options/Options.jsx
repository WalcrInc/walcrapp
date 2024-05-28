import React from "react";
import { OptionContainer } from "./Options.style";
import { LogoWhiteX } from "@/components/Logo/Logo";
import { Box, Button } from "@chakra-ui/react";
import { AppleIcon, BrushIcon, GoogleIcon, User } from "@/assets";

const Options = ({ handleNext }) => {
  return (
    <OptionContainer>
      <header>
        <div className="logo">
          <LogoWhiteX />
        </div>
        <p>Lorem ipsum dolor sit.</p>
      </header>
      <div className="text">
        <Box display={"flex"} gap="20px" position={"relative"} top={"-40px"}>
          <Button
            background={"#F7F7F7"}
            width={"171px"}
            height={"119px"}
            size={"lg"}
            borderRadius={"18px"}
            onClick={() => handleNext("findService")}
            display={"flex"}
            flexDirection={"column"}
            gap="20px"
            padding={"2%"}
          >
            <BrushIcon />
            Find <br /> a service
          </Button>
          <Button
            background={"#F7F7F7"}
            width={"171px"}
            height={"119px"}
            size={"lg"}
            borderRadius={"18px"}
            onClick={() => handleNext("becomeTaskworker")}
            display={"flex"}
            flexDirection={"column"}
            gap="20px"
            padding={"2%"}
          >
            <User />
            Become <br /> a taskworker
          </Button>
        </Box>
        <div className="buttons">
          <Button
            background={"#1a1a1a"}
            width={"171px"}
            color={"#fff"}
            size={"lg"}
            onClick={() => handleNext("signIn")}
          >
            Sign In
          </Button>
          <Box display={"flex"} gap="30px">
            <Button background={"#F7F7F7"} size={"lg"}>
              <AppleIcon />
            </Button>
            <Button background={"#F7F7F7"} size={"lg"}>
              <GoogleIcon />
            </Button>
          </Box>
        </div>
        <p className="skip" onClick={() => handleNext("skip")}>
          Skip
        </p>
      </div>
    </OptionContainer>
  );
};

export { Options };
