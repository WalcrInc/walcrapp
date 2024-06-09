import { Button } from "@chakra-ui/react";
import React from "react";
import { PageContainer } from "./Page.style";
import useRoutes from "@/hooks/Routes/Routes";
import { LogoWhiteX } from "@/components/Logo/Logo";

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
        >
          Get Started
        </Button>
      </div>
    </PageContainer>
  );
};

export { Page };
