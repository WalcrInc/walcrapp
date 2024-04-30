import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Link from "next/link";
import { Show } from "@/assets";
import ShowPassword from "@/hooks/ShowPassword/ShowPassword";

// Inside FormWithPhone component
const FormWithPhone = ({
  password,
  handlePassword,
  handlePhone,
  phone
}) => {
  const { handleShow, show } = ShowPassword();

  return (
    <>
      <FormControl>
        <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
          Phone number
        </FormLabel>
        <PhoneInput
          name="phone"
          value={phone}
          country={"us"}
          onChange={handlePhone}
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
            value={password} // Bind the value to the password state
            onChange={(e) => handlePassword(e.target.value)} // Call handlePassword on input change
          
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
