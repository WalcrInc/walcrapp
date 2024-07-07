import { AlertIcon, DontShow, PasswordIcon, Show, DangerIconRed } from "@/assets";
import ShowPassword from "@/hooks/useLoginHook/useLoginHook";
import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";

const FormWithEmail = ({ formik }) => {
  const { handleShow, show } = ShowPassword();

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (formik.errors.email) {
      if (formik.errors.email === "Required") {
        setEmailError("Email is a required field")
      } else {
        setEmailError(`${formik.values.email} is not a valid email address`)
      }
    } else {
      setEmailError("")
    }
  }, [formik.errors.email, formik.values.email])

  useEffect(() => {
    if (formik.errors.emailPassword) {
      if (formik.errors.emailPassword === "Required") {
        setPasswordError("Password is a required field")
      } else {
        setPasswordError(`Password must be atleast 8 characters`)
      }
    } else {
      setPasswordError("")
    }
  }, [formik.errors.emailPassword, formik.values.emailPassword])

  return (
    <>
      <FormControl>
        <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
          Email address
        </FormLabel>
        <Input
          padding={"25px 14px"}
          type="email"
          placeholder="name@example.com"
          border={
            formik.touched.email && formik.errors.email ? "1px solid #FB2047" : "1px solid  #CDD1DC"
          }
          focusBorderColor="0.5px solid #CDD1DC"
          {...formik.getFieldProps("email")}
        />
        {emailError !== '' &&
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#FB2047",
              marginTop: "10px"
            }}>
            <DangerIconRed />
            <p>{emailError}</p>
          </div>
        }
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
            formik.touched.emailPassword && formik.errors.emailPassword
              ? "1px solid #FB2047"
              : "1px solid  #CDD1DC"
          }
        >
          <Input
            width={"100%"}
            border={"none"}
            type={show ? "text" : "password"}
            padding={"0"}
            placeholder="******"
            {...formik.getFieldProps("emailPassword")}
          />
          <span onClick={handleShow}>
            {show ? <PasswordIcon /> : <DontShow />}

          </span>
        </Box>
        {passwordError !== '' &&
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#FB2047",
              marginTop: "10px"
            }}>
            <DangerIconRed />
            <p>{passwordError}</p>
          </div>
        }
      </FormControl>
    </>
  );
};

export { FormWithEmail };
