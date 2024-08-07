import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, onClick, type, variant,disabled, ...rest }) => {
  return variant === "default" ? (
    <Button
      border={"none"}
      textAlign={"center"}
      outline={"none"}
      color={"#fff"}
      background={"#1A1A1A"}
      padding={"25px 14px"}
      borderRadius={"16px"}
      {...rest}
      onClick={onClick}
      type={"submit"}
      isDisabled={disabled}
      _disabled={{
        background: "grey"
      }}
    >
      {children}
    </Button>
  ) : variant === "transparent" ? (
    <Button
      border={"none"}
      outline={"none"}
      
      color={"#000"}
      background={"#F7F7F7"}
      padding={"25px 14px"}
      borderRadius={"16px"}
      display={"flex"}
      gap={"10px"}
      alignItems={"center"}
      fontSize={"16px"}
      onClick={onClick}
      {...rest}
      type="submit"
    >
      {children}
    </Button>
  ) : null;
};

export { CustomButton };
