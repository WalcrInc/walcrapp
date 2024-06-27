import { LogoWhite } from "Src/Assets/index";
import { Box } from "@chakra-ui/react";
import React from "react";

const LogoWhiteX = () => {
  return (
    <Box
      display={"flex"}
      gap={"10px"}
      alignItems={"center"}
      color={"#fff"}
      fontSize={"32px"}
      fontWeight={"800"}
    >
      <div
        style={{
          background: "#fff",
          height: "28px",
          width: "28px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoWhite />
      </div>
      Walcr
    </Box>
  );
};

export { LogoWhiteX };
