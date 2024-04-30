import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { Show } from "@/assets";
import ShowPassword from "@/hooks/ShowPassword/ShowPassword";

// Inside FormWithPhone component
const FormWithPhone = ({
    phoneNumberOption,
    handlePhoneChange,
    handleSubmit, // Add handleSubmit to handle form submission
  }) => {
    const { handleShow, show } = ShowPassword();
  
    return (
      <form onSubmit={handleSubmit}> {/* Add onSubmit to handle form submission */}
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Phone number
          </FormLabel>
          <PhoneInput
            name="phoneNumber"
            onChange={handlePhoneChange}
            value={phoneNumberOption.phoneNumber}
            inputStyle={{
              border: "1px solid #CDD1DC",
              height: "56px",
              width: "100%",
              fontSize: "16px",
            }}
            country={"us"}
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
              onChange={handlePhoneChange}
              value={phoneNumberOption.password}
            />
            <span onClick={handleShow}>
              <Show />
            </span>
          </Box>
        </FormControl>
        <Box display={"flex"} justifyContent={"space-between"}>
          <div className="checkbox">
            <input type="checkbox" /> Keep me signed in
          </div>
          <span className="span">
            <Link href={"/forgot-password"}>Forgot password</Link>
          </span>
        </Box>
        <Button
          type="submit" // Add type="submit" to trigger form submission
          border={"none"}
          outline={"none"}
          color={"#fff"}
          background={"#1A1A1A"}
          padding={"25px 14px"}
          borderRadius={"16px"}
        >
          Continue
        </Button>
      </form>
    );
  };
  

export { FormWithPhone };
