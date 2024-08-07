import { BackIconX } from "@/assets";
import { Box, Button, Modal, Select, Textarea } from "@chakra-ui/react";
import React from "react";
import { StatusContainer } from "./Style/Status.style";

const Report = ({ setStep }) => {
  return (
    <StatusContainer>
      <header>
        <span onClick={() => setStep(2)}>
          <BackIconX />
        </span>
        <h1>Report an issue</h1>
        <span style={{ color: "#fff" }}>.</span>
      </header>

      <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
        <Select size={"lg"} borderRadius={"6px"}>
          <option>heyy</option>
        </Select>
        <Textarea
          height={"130px"}
          size={"lg"}
          placeholder="Write your complaint here"
          borderRadius={"6px"}
        ></Textarea>
      </Box>

      <Button
        color={"#fff"}
        borderRadius={"8px"}
        width={"100%"}
        //   margin={"0 5%"}
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
        left={"0"}
        background={"#1a1a1a"}
        size={"lg"}
        marginTop={"10%"}
      >
        {" "}
        Submit
      </Button>
      <Modal>
        
      </Modal>
    </StatusContainer>
  );
};

export { Report };
