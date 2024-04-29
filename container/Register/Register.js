import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { AppleIcon, GoogleIcon } from "@/assets";

const Register = () => {
  return (
    <>
      <div className="header">
        <h1>Create an account</h1>
        <p>Welcome! Please enter your details to continue</p>
      </div>

      <form>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Name
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Email address
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="email"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Password
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="password"
          />
        </FormControl>
        <Box display={"flex"} justifyContent={"space-between"}>
          <div className="checkbox">
            <input type="checkbox" /> I agree to the{" "}
            <span>Terms of Service </span> and <span>Policy</span>
          </div>
        </Box>
        <Button
          border={"none"}
          outline={"none"}
          color={"#fff"}
          background={"#1A1A1A"}
          padding={"25px 14px"}
          borderRadius={"16px"}
        >
          Continue
        </Button>
      </form>
      <div className="or">or</div>

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
      >
        <GoogleIcon /> Continue with Google
      </Button>
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
      >
        <AppleIcon /> Continue with Apple
      </Button>
      <Box textAlign={"center"} color={"#8C92AB"}>
        Already have an account?
        <span style={{ color: "#1A1A1A", fontWeight: "700" }}>
          {" "}
          <Link href={"/login"}>Login</Link>{" "}
        </span>
      </Box>
    </>
  );
};

export { Register };
