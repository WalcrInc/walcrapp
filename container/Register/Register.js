import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { AlertIcon, AppleIcon, GoogleIcon, Show } from "@/assets";
import { CustomButton } from "@/components/Button/Button";
import useRegister from "@/hooks/useRegisterHook/useRegister";

const Register = () => {
  const { formik, show, handleShow } = useRegister();
  return (
    <>
      <div className="header">
        <h1>Create an account</h1>
        <p>Welcome! Please enter your details to continue</p>
      </div>

      <CustomButton variant={"transparent"}>
        <GoogleIcon /> Continue with Google
      </CustomButton>
      <CustomButton variant={"transparent"}>
        <AppleIcon /> Continue with Apple
      </CustomButton>

      <div className="or">or</div>

      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Name
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="text"
            border={
              formik.errors.name ? "1px solid #FB2047" : "1px solid  #CDD1DC"
            }
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name && formik.touched.name ? (
            <span className="error">
              <AlertIcon />
              {formik.errors.name}
            </span>
          ) : null}
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
              formik.errors.email ? "1px solid #FB2047" : "1px solid  #CDD1DC"
            }
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="error">
              <AlertIcon />
              {formik.errors.email}
            </span>
          ) : null}
        </FormControl>

        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Phone Number
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="tel"
            {...formik.getFieldProps("phone_number")}
            border={
              formik.errors.phone_number ? "1px solid #FB2047" : "1px solid  #CDD1DC"
            }
          />
          {formik.errors.phone_number && formik.touched.phone_number ? (
            <span className="error">
              <AlertIcon />
              {formik.errors.phone_number}
            </span>
          ) : null}
        </FormControl>

        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
           Address
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="tel"
            {...formik.getFieldProps("address")}
            border={
              formik.errors.address ? "1px solid #FB2047" : "1px solid  #CDD1DC"
            }
          />
          {formik.errors.address && formik.touched.address ? (
            <span className="error">
              <AlertIcon />
              {formik.errors.address}
            </span>
          ) : null}
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
            formik.errors.password
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
        {formik.errors.password && formik.touched.password ? (
          <span className="error">
            <AlertIcon />
            {formik.errors.password}
          </span>
        ) : null}
      </FormControl>
        <Box display={"flex"} justifyContent={"space-between"}>
          <div className="checkbox">
            <input type="checkbox" /> I agree to the{" "}
            <span>Terms of Service </span> and <span>Policy</span>
          </div>
        </Box>
        <CustomButton variant={"default"}>Continue</CustomButton>
      </form>

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
