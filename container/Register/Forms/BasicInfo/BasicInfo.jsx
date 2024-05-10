import { AlertIcon, AppleIcon, GoogleIcon, Show } from "@/assets";
import { CustomButton } from "@/components/Button/Button";
import useRegister from "@/hooks/useRegisterHook/useRegister";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BasicInfoStyle } from "./BasicInfo.style";

const BasicInfo = ({ handleNext }) => {
  const { formik, step, show, handleShow } = useRegister();

  return (
    <BasicInfoStyle>
      <div className="header">
        <h1>Create an account</h1>
        <p>Welcome! Please enter your details to continue</p>
      </div>

      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <CustomButton variant={"transparent"}>
          <GoogleIcon /> Continue with Google
        </CustomButton>

        <CustomButton variant={"transparent"}>
          <AppleIcon /> Continue with Apple
        </CustomButton>
      </Box>

      <div className="or">or</div>

      <form>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            First Name
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="text"
            border={
              formik.touched.firstname && formik.errors.firstname
                ? "1px solid #FB2047"
                : "1px solid  #CDD1DC"
            }
            {...formik.getFieldProps("firstname")}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Last Name
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="text"
            border={
              formik.touched.lastname && formik.errors.lastname
                ? "1px solid #FB2047"
                : "1px solid  #CDD1DC"
            }
            {...formik.getFieldProps("lastname")}
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
            {...formik.getFieldProps("email")}
            border={
              formik.touched.email &&  formik.errors.email ? "1px solid #FB2047" : "1px solid  #CDD1DC"
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Password
          </FormLabel>
          <Box
            display={"flex"}
            alignItems={"center"}
            borderRadius={"6px"}
            padding={"5px 15px"}
            focusBorderColor="0.5px solid #CDD1DC"
            border={
              formik.touched.password &&  formik.errors.password
                ? "1px solid #FB2047"
                : "1px solid  #CDD1DC"
            }
          >
            <Input
              width={"100%"}
              border={"none"}
              type={show ? "text" : "password"}
              padding={"0"}
              {...formik.getFieldProps("password")}
            />
            <span onClick={handleShow}>
              <Show />
            </span>
          </Box>
        </FormControl>
        <Box display={"flex"} justifyContent={"space-between"}>
          <div className="checkbox">
            <input type="checkbox" /> I agree to the{" "}
            <span>Terms of Service </span> and <span>Policy</span>
          </div>
        </Box>

        <CustomButton
          disabled={!formik.isValid}
          variant={"default"}
          onClick={handleNext}
        >
          Continue
        </CustomButton>
      </form>

      <Box textAlign={"center"} color={"#8C92AB"}>
        Already have an account?
        <span style={{ color: "#1A1A1A", fontWeight: "700" }}>
          {" "}
          <Link href={"/login"}>Login</Link>{" "}
        </span>
      </Box>
    </BasicInfoStyle>
  );
};

export { BasicInfo };
