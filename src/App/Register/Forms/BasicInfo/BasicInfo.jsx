import {
  AlertIcon,
  AppleIcon,
  DontShow,
  GoogleIcon,
  PasswordIcon,
  Show,
} from "@/Assets";
import { CustomButton } from "@/Components/Button/Button";
import useRegister from "@/hooks/useRegisterHook/useRegister";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BasicInfoStyle } from "./BasicInfo.style";
import { useFormik } from "formik";

const BasicInfo = ({ handleNext }) => {
  const {  show, handleShow, keepSignedIn, setKeepSignedIn } = useRegister();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstname) {
        errors.firstname = "Required";
      }
      if (!values.lastname) {
        errors.lastname = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      console.log(errors)
      return errors;
      
    },
    onSubmit: async (values) => {
      console.log(values);
      // dispatch(register(values));
      const serializedData = JSON.stringify(values);
      localStorage.setItem("formDataStep1", serializedData);
      handleNext();
    },
  });

 

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

      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            First Name
          </FormLabel>
          <Input
            box-shadow={"0px 0px 0px 1px #CDD1DC"}
            padding={"25px 14px"}
            type="text"
            placeholder="First Name"
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
            placeholder="Last Name"
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
            placeholder="Email Address"
            {...formik.getFieldProps("email")}
            border={
              formik.touched.email && formik.errors.email
                ? "1px solid #FB2047"
                : "1px solid  #CDD1DC"
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
              formik.touched.password && formik.errors.password
                ? "1px solid #FB2047"
                : "1px solid  #CDD1DC"
            }
          >
            <Input
              width={"100%"}
              border={"none"}
              type={show ? "text" : "password"}
              padding={"0"}
              placeholder="*************"
              {...formik.getFieldProps("password")}
            />
            <span onClick={handleShow}>
              {show ? <PasswordIcon /> : <DontShow />}
            </span>
          </Box>
        </FormControl>
        <Box display={"flex"} justifyContent={"space-between"}>
          <label className="checkbox">
            <input
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              type="checkbox"
            />{" "}
            I agree to the <span>Terms of Service </span> and{" "}
            <span>Policy</span>
          </label>
        </Box>

        <CustomButton
          // disabled={!formik.isValid}
          variant={"default"}
        >
          Continue
        </CustomButton>
      </form>

      <Box textAlign={"center"} color={"#8C92AB"}>
        Already have an account?
        <span style={{ color: "#1A1A1A", fontWeight: "700" }}>
          {" "}
          <Link href={"/login"}>Sign In</Link>{" "}
        </span>
      </Box>
    </BasicInfoStyle>
  );
};

export { BasicInfo };
