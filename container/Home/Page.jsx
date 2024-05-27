import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { PageContainer } from "./Page.style";
import { useRouter } from "next/router";
import useRoutes from "@/hooks/Routes/Routes";
import { LogoWhiteX } from "@/components/Logo/Logo";

const Page = () => {
  const { handleOnboardingRoute } = useRoutes();
  return (
    <PageContainer>
      <header>
        <LogoWhiteX /> 
        <div className="overlay">
      {/* <Image src={"/images/overlay.svg"} height={50} width={50} alt="heyy" /> */}
      </div>
      </header>
     

      <div className="text">
        <h1> Lorem ipsum dolor amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button
          onClick={handleOnboardingRoute}
          color={"#fff"}
          background={"#1a1a1a"}
          size={"lg"}
        >
          Get Started
        </Button>
      </div>
    </PageContainer>
  );
};

export { Page };
