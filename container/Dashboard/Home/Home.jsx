import { Hamburger, LocationIcon, NotificationIcon } from "@/assets";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Box p={"6% "} display={"flex"} flexDirection={"column"} gap={"40px"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Hamburger />
          <NotificationIcon />
        </Box>
        <Box>
          <Text
            display={"flex"}
            gap={"5px"}
            fontSize={"18px"}
            lineHeight={"24px"}
          >
            Welcome, <Text fontWeight={"800"}>Joe</Text>{" "}
          </Text>

          <Text
            display={"flex"}
            color={"#8C92AB"}
            alignItems={"center"}
            gap={"5px"}
            fontSize={"14px"}
          >
            <LocationIcon /> 1511 Duncan Avenue
          </Text>
        </Box>
      </Box>
      <Box background={"#1A1A1A"}>
        <Box>Wallet balance $20.00</Box>
        <Box></Box>
      </Box>
    </div>
  );
};

export { Home };
