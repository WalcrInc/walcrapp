import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { Show } from "@/assets";
import ShowPassword from "@/hooks/useLoginHook/useLoginHook";

const FormWithPhone = ({ handlePhone, formik }) => {
  const { handleShow, show } = ShowPassword();

  return (
    <>
      <FormControl>
        <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
          Phone number
        </FormLabel>
        <PhoneInput
          name="phoneNumber"
          value={formik.values.phoneNumber}
          country={"us"}
          onChange={(value) => {
            formik.setFieldValue("phoneNumber", value);
            handlePhone(value);
          }}
          inputStyle={{
            border: "1px solid #CDD1DC",
            height: "56px",
            width: "100%",
            fontSize: "16px",
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
          Password
        </FormLabel>
        <Box
          display={"flex"}
          alignItems={"center"}
          border={"1px solid #CDD1DC"}
          borderRadius={"6px"}
          padding={"5px 15px"}
          focusBorderColor="0.5px solid #CDD1DC"
        >
          <Input
            width={"100%"}
            border={"none"}
            type={show ? "text" : "password"}
            padding={"0"}
            name="phonePassword"
            value={formik.values.phonePassword}
            onChange={formik.handleChange}
          />
          <span onClick={handleShow}>
            <Show />
          </span>
        </Box>
      </FormControl>
    </>
  );
};

export { FormWithPhone };
