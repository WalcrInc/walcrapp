import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { PageContainer } from "./Page.style";
import { useRouter } from "next/router";
import useRoutes from "@/hooks/Routes/Routes";


const Page = () => {
    const {handleOnboardingRoute} = useRoutes()
  return (
    <PageContainer>
      <Image
        src={"/images/home.svg"}
        height={608}
        width={430}
        objectFit="contain"
      />
      <div clasName="text">
        <h1> Lorem ipsum dolor amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Button onClick={handleOnboardingRoute} color={"#fff"} background={"#1a1a1a"} size={"lg"}>
        Get Started
      </Button>
    </PageContainer>
  );
};

export { Page };
