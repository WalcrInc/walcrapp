import { Button } from "@chakra-ui/react";
import React from "react";
import { PageContainer } from "./Page.style.js";
import useRoutes from "@/Components/hooks/Routes/Routes.js";
import { LogoWhiteX } from "@/Components/Logo/Logo";
import { Next_Icon, NextIconX } from "@/Assets";

const Page = ({ handleNext }) => {
  const { handleOnboardingRoute } = useRoutes();

  return (
    <PageContainer>
      <header>
        {/* <div className="logo">
          <LogoWhiteX />
        </div> */}
        <div className="overlay" />
      </header>

      <div className="text">
        <h1>Lorem ipsum dolor amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button
          onClick={handleNext}
          color={"#fff"}
          background={"#1a1a1a"}
          size={"lg"}
          width={"90%"}
          margin={"0 10%"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          borderReadius={"16px"}
        >
          Get Started  <NextIconX />
        </Button>
      </div>
    </PageContainer>
  );
};

export { Page };
