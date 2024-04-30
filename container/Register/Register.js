import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { AppleIcon, GoogleIcon } from "@/assets";
import { CustomButton } from "@/components/Button/Button";

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
        <CustomButton variant={"default"}>Continue</CustomButton>
      </form>
      <div className="or">or</div>

      <CustomButton variant={"transparent"}>
        <GoogleIcon /> Continue with Google
      </CustomButton>
      <CustomButton variant={"transparent"}>
        <AppleIcon /> Continue with Apple
      </CustomButton>
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
