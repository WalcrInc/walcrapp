import React from "react";
import { OptionContainer } from "./Options.style";
import { LogoWhiteX } from "@/components/Logo/Logo";
import { Button } from "@chakra-ui/react";

const Options = ({handleNext}) => {
  return (
    <OptionContainer>
      <header>
        <div className="logo">
          <LogoWhiteX />
        </div>
      </header>
      <div className="text">
        <h1>Lorem ipsum dolor amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button
          onClick={handleNext}
          color={"#fff"}
          background={"#1a1a1a"}
          size={"lg"}
          width={"100%"}
        >
          Get Started
        </Button>
      </div>
    </OptionContainer>
  );
};

export  { Options };
