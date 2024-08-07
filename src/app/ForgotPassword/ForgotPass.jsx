import { BackIcon } from "@/assets/index";
import { Button, FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ForgotStyle } from "./ForgotPass.style";
import { useRouter } from "next/router";
import useRoutes from "@/features/Hooks/Routes/Routes";
import Link from "next/link";

const ForgotPass = () => {
  const router = useRouter();
  const { handleOtpRoute } = useRoutes();

  return (
    <ForgotStyle>
      <Link href={"/login"}>
        {" "}
        <BackIcon />
      </Link>

      <div className="header">
        <h1> Enter your number</h1>
        <p>We&apos;ll send a code for verification</p>
      </div>

      <form>
        <FormControl>
          <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
            Phone number
          </FormLabel>
          <PhoneInput
            inputStyle={{
              border: "1px solid #CDD1DC",
              height: "56px ",
              width: "100%",
              fontSize: "16px",
            }}
            country={"us"}
          />
          {/* <Input
              box-shadow={"0px 0px 0px 1px #CDD1DC"}
              padding={"25px 14px"}
            /> */}
        </FormControl>
        <Button
          onClick={handleOtpRoute}
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
    </ForgotStyle>
  );
};

export { ForgotPass };
