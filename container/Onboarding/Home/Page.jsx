import { Button } from "@chakra-ui/react";
import React from "react";
import { PageContainer } from "./Page.style";
import useRoutes from "@/hooks/Routes/Routes";
import { LogoWhiteX } from "@/components/Logo/Logo";
import { Next_Icon, NextIconX } from "@/assets";

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
        <button
          onClick={handleNext}
          style={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
            margin: "0 10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "1rem",
            width: "100%",
            padding: "1rem"
          }}
        >
          Get Started  <NextIconX />
        </button>
      </div>
    </PageContainer>
  );
};

export { Page };
