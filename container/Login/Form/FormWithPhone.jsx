import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { AlertIcon, Show, USA } from "@/assets";
import ShowPassword from "@/hooks/useLoginHook/useLoginHook";

const FormWithPhone = ({ handlePhone, formik }) => {
  const { handleShow, show } = ShowPassword();

  return (
    <>
      <FormControl>
        <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
          Phone number
        </FormLabel>
        <Box display={"flex"} gap={"10px"}>
          <Box
            display={"flex"}
            width={"20%"}
            gap={"10px"}
            padding={" 12px"}
            alignItems={"center"}
            borderRadius={"4px"}
            border={
              formik.errors.phoneNumber
                ? "1px solid #FB2047"
                : "1px solid  #CDD1DC"
            }
          >
            <USA />
          </Box>
          <Input
            padding={"25px 14px"}
            type="tel"
            border={
              formik.errors.phoneNumber
                ? "1px solid #FB2047"
                : "1px solid  #CDD1DC"
            }
            {...formik.getFieldProps("phoneNumber")}
          />
        </Box>
        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
          <span className="error">
            <AlertIcon />
            {formik.errors.phoneNumber}
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
            formik.errors.phonePassword
              ? "1px solid #FB2047"
              : "1px solid  #CDD1DC"
          }
        >
          <Input
            width={"100%"}
            border={"none"}
            type={show ? "text" : "password"}
            padding={"0"}
            {...formik.getFieldProps("phonePassword")}
          />
          <span onClick={handleShow}>
            <Show />
          </span>
        </Box>
        {formik.errors.phonePassword && formik.touched.phonePassword ? (
          <span className="error">
            <AlertIcon />
            {formik.errors.phonePassword}
          </span>
        ) : null}
      </FormControl>
    </>
  );
};

export { FormWithPhone };
