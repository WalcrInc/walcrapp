import React from "react";
import { TopBar } from "@/components/TopBar/TopBar";
import GetCode from "@/components/Input/GetCode";
import Style from "./Style.module.css";
// import IconInput from "@/components/Input/IconInput";
import { Button } from "@chakra-ui/react";
import { IconInput } from "@/components/Input/IconInput";

const ChangeEmail = () => {
  return (
    <div className={Style.Container}>
      <TopBar href={"/dashboard/profile"} text={"Change Email"} />
      <h1>New Email Verification</h1>
      <div className={Style.Input}>
        <IconInput />
      </div>
      <div className={Style.Input}>
        <GetCode text={"New Phone"} />
      </div>

      <div className={Style.Security}>
        <h1>Security Verification</h1>
        <div className={Style.Input}>
          <GetCode
            text={"Phone"}
            notice={"Enter the 6 digit code sent to your number"}
          />
        </div>
        <div className={Style.Input}>
          <GetCode
            text={"Current E-mail"}
            notice={"Enter the 6 digit code sent to your email"}
          />
        </div>

        <p className={Style.text}>Security verification unavailable?</p>
      </div>

      <Button
        border={"none"}
        textAlign={"center"}
        outline={"none"}
        color={"#fff"}
        background={"#1A1A1A"}
        width={"100%"}
        paddingX={"40px"}
        borderRadius={"8px"}
        marginTop={"50px"}
      >
        Continue
      </Button>
    </div>
  );
};

export default ChangeEmail;
