import React, { useState } from "react";
import style from "./Options.module.css";
import { LogoWhiteX } from "@/assets/index";
import { Box, Button } from "@chakra-ui/react";
import { AppleIcon, BrushIcon, GoogleIcon, User } from "@/assets/index";
import useRoutes from "@/features/Hooks/Routes/Routes";

const Options = ({ handleNext }) => {
  const [currentView, setCurrentView] = useState("");

  const handleView = (view) => {
    setCurrentView(view);
    console.log(view);
  };
  const { handleTaskWalcrRouteX, handleFindServicesRoute } = useRoutes();

  return (
    <div className={style.Container}>
      <div className={style.header}>
        <p>Lorem ipsum dolor sit.</p>
        <div className={style.text}>
          <Box
            display={"flex"}
            gap="20px"
            position={"relative"}
            top={"-15%"}
            justifyContent={"center"}
          >
            <Button
              background={"#F7F7F7"}
              width={"171px"}
              height={"119px"}
              size={"lg"}
              borderRadius={"18px"}
              onClick={handleFindServicesRoute}
              display={"flex"}
              flexDirection={"column"}
              gap="20px"
              padding={"2%"}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={"-30px"}
            >
              <BrushIcon />
              Find <br /> a Service
            </Button>
            <Button
              background={"#F7F7F7"}
              width={"171px"}
              height={"119px"}
              size={"lg"}
              borderRadius={"18px"}
              onClick={handleTaskWalcrRouteX}
              display={"flex"}
              flexDirection={"column"}
              gap="20px"
              padding={"2%"}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={"-30px"}
            >
              <User />
              Become <br /> a Taskwalker
            </Button>
          </Box>
          <div className={style.buttons}>
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
          <div className={style.skip}>
            <span onClick={() => handleNext("skip")}>Skip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Options };
