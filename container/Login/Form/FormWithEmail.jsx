import { Show } from "@/assets";
import ShowPassword from "@/hooks/useLoginHook/useLoginHook";
import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import Link from "next/link";

const FormWithEmail = ({ emailOption, handleEmailChange }) => {
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
          name="email"
          value={emailOption.email}
          onChange={handleEmailChange}
          focusBorderColor="0.5px solid #CDD1DC"
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
            name="password"
            value={emailOption.password}
            onChange={handleEmailChange}
          />
          <span onClick={handleShow}>
            {" "}
            <Show />
          </span>
        </Box>
      </FormControl>
    </>
  );
};

export { FormWithEmail };
