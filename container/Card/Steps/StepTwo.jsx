import { DateIcon } from "@/assets";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const StepTwo = () => {
  return (
    <form>
      <FormControl>
        <FormLabel>Card number</FormLabel>
        <Input
          placeholder="0000 0000 0000 0000"
          size={"lg"}
          borderRadius={"6px"}
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Card holder name</FormLabel>
        <Input
          placeholder="Enter the name of the card"
          size={"lg"}
          borderRadius={"6px"}
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
        />
      </FormControl>
      <Box display={"flex"} gap={"20px"}>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <InputGroup
            size={"lg"}
            borderRadius={"6px"}
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          >
            <InputLeftElement>
              <DateIcon />
            </InputLeftElement>
            <Input placeholder="0000" />
          </InputGroup>
        </FormControl>{" "}
        <FormControl>
          <FormLabel>CVV</FormLabel>
          <Input
            placeholder="967"
            size={"lg"}
            borderRadius={"6px"}
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          />
        </FormControl>
      </Box>

      <Button
        marginTop={"100px"}
        background={"#1A1A1A"}
        color={"#fff"}
        borderRadius={"8px"}
        size={"lg"}
      >
        Add Card
      </Button>
    </form>
  );
};

export { StepTwo };
