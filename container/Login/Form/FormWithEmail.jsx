import { AlertIcon, Show } from "@/assets";
import ShowPassword from "@/hooks/useLoginHook/useLoginHook";
import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import Link from "next/link";

const FormWithEmail = ({ formik }) => {
  const { handleShow, show } = ShowPassword();

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
            formik.errors.email ? "1px solid #FB2047" : "1px solid  #CDD1DC"
          }
          focusBorderColor="0.5px solid #CDD1DC"
          {...formik.getFieldProps("email")}
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
          Password
        </FormLabel>
        <Box
          display={"flex"}
          alignItems={"center"}
          borderRadius={"6px"}
          padding={"5px 15px"}
          focusBorderColor="0.5px solid #CDD1DC"
          border={
            formik.errors.emailPassword ? "1px solid #FB2047" : "1px solid  #CDD1DC"
          }
        >
          <Input
            width={"100%"}
            border={"none"}
            type={show ? "text" : "password"}
            padding={"0"}
            placeholder="**********"
            {...formik.getFieldProps("emailPassword")}
          />
          <span onClick={handleShow}>
            {" "}
            <Show />
          </span>
        </Box>
        {formik.errors.emailPassword && formik.touched.emailPassword ? (
            <span className="error">
              <AlertIcon />
              {formik.errors.emailPassword}
            </span>
          ) : null}
      </FormControl>
    </>
  );
};

export { FormWithEmail };
