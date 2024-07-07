import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
// import { PageContainer } from "./index";
import style from './Page.module.css'
import useRoutes from "Src/Features/Hooks/Routes/Routes";
// import { LogoWhiteX } from "Src/components/Logo";
import { Next_Icon, NextIconX } from "Src/Assets/index";
import HomeImage from "@/Assets/images/home.png"

const Page = ({ handleNext }) => {
  const { handleOnboardingRoute } = useRoutes();

  return (
    <div className={style.Container}>
      <div>
        <Image src={HomeImage} className={style.Image} />
      </div>

      <div className={style.text}>
        <h1>Lorem ipsum dolor amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button
          onClick={handleNext}
          color={"#fff"}
          background={"#1a1a1a"}
          size={"lg"}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          borderReadius={"16px"}
        >
          <p style={{marginRight:"10px", color:"#fff"}}>
          Get Started  
          </p>
          
          <NextIconX/>
        </Button>
      </div>
      </div>
  );
};

export default Page;