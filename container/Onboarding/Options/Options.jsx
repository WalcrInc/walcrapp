import React, { useState } from "react";
import { OptionContainer } from "./Options.style";
import { LogoWhiteX } from "@/components/Logo/Logo";
import { Box, Button } from "@chakra-ui/react";
import { AppleIcon, BrushIcon, GoogleIcon, User } from "@/assets";
import useRoutes from "@/hooks/Routes/Routes";

const Options = ({ handleNext }) => {
  const [currentView, setCurrentView] = useState("");

  const handleView = (view) => {
    setCurrentView(view);
    console.log(view);
  };
  const { handleTaskWalcrRouteX, handleFindServicesRoute } = useRoutes();

  return (
    <>
      <OptionContainer>
        <header>

          <p>Lorem ipsum dolor sit.</p>
        </header>
        <div className="text">
          <Box
            display={"flex"}
            gap="20px"
            width="100%"
            position={"relative"}
            top={"-2rem"}
            justifyContent={"center"}
          >
            <Button
              background={"#F7F7F7"}
              width={"100%"}
              height={"119px"}
              size={"lg"}
              borderRadius={"18px"}
              onClick={handleFindServicesRoute}
              display={"flex"}
              flexDirection={"column"}
              gap="0.5rem"
              padding={"12px"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"14px"}
              fontWeight={"700"}
            >
              <BrushIcon />
              Find <br /> a Service
            </Button>
            <Button
              background={"#F7F7F7"}
              width={"100%"}
              height={"119px"}
              size={"lg"}
              borderRadius={"18px"}
              onClick={handleTaskWalcrRouteX}
              display={"flex"}
              flexDirection={"column"}
              gap="0.5rem"
              padding={"12px"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"14px"}
              fontWeight={"700"}
            >
              <User />
              Become <br /> a Taskwalker
            </Button>
          </Box>
          <div className="buttons">
            <Button
              background={"#1a1a1a"}
              width={"171px"}
              color={"#fff"}
              borderRadius={"1rem"}
              size={"lg"}
              onClick={() => handleNext("signIn")}
              flex={"1"}
            >
              Sign In
            </Button>
            <Box display={"flex"} gap="20px" flex={"1"}>
              <Button background={"#F7F7F7"} size={"lg"} borderRadius={"1rem"}>
                <AppleIcon />
              </Button>
              <Button background={"#F7F7F7"} size={"lg"} borderRadius={"1rem"}>
                <GoogleIcon />
              </Button>
            </Box>
          </div>
          <p className="skip" onClick={() => handleNext("skip")}>
            Skip
          </p>
        </div>
      </OptionContainer>
    </>
  );
};

export { Options };
