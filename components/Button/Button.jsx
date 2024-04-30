import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ children, onClick, type, variant, ...rest }) => {
  return variant === "default" ? (
    <Button
      border={"none"}
      outline={"none"}
      color={"#fff"}
      background={"#1A1A1A"}
      padding={"25px 14px"}
      borderRadius={"16px"}
      {...rest}
      onClick={onClick}
      type="submit"
    >
      {children}
    </Button>
  ) : variant === "transparent" ? (
    <Button
      border={"1px solid #1A1A1A"}
      outline={"none"}
      color={"#000"}
      background={"transparent"}
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
