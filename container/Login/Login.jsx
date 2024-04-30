import { useState } from "react";
import Link from "next/link";
import { AppleIcon, GoogleIcon } from "@/assets";
import { FormWithEmail } from "./Form/FormWithEmail";
import { FormWithPhone } from "./Form/FormWithPhone";
import { Box } from "@chakra-ui/react";
import useLogin from "@/hooks/useLoginHook/useLoginHook";
import { CustomButton } from "@/components/Button/Button";

const Login = () => {
  const {
    handleSelected,
    handleEmailChange,
    emailOption,
    password,
    phone,
    handlePhone,
    selectedOption,
    handlePassword,
    handleSubmit,
  } = useLogin();

  return (
    <>
      <div className="header">
        <h1>Login</h1>
        <p>Welcome back to the app</p>
      </div>

      <div className="options">
        <p
          className={selectedOption === "email" ? "active" : ""}
          onClick={() => handleSelected("email")}
        >
          Email
        </p>
        <p
          className={selectedOption === "phone" ? "active" : ""}
          onClick={() => handleSelected("phone")}
        >
          Phone Number
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {selectedOption === "email" && (
          <FormWithEmail
            emailOption={emailOption}
            handleEmailChange={handleEmailChange}
          />
        )}
        {selectedOption === "phone" && (
          <FormWithPhone
            password={password}
            handlePassword={handlePassword}
            phone={phone}
            handlePhone={handlePhone}
          />
        )}
        <Box display={"flex"} justifyContent={"space-between"}>
          <div className="checkbox">
            <input type="checkbox" /> Keep me signed in
          </div>
          <span className="span">
            <Link href={"/forgot-password"}>Forgot password</Link>
          </span>
        </Box>
        <CustomButton variant={"default"}>Continue</CustomButton>
      </form>

      <div className="or">or</div>

      <CustomButton variant={"transparent "}>
        <GoogleIcon /> Continue with Google
      </CustomButton>
      <CustomButton variant={"transparent "}>
        <AppleIcon /> Continue with Apple
      </CustomButton>
      <Box textAlign={"center"} color={"#8C92AB"}>
        Don’t have an account?
        <span style={{ color: "#1A1A1A", fontWeight: "700" }}>
          {" "}
          <Link href={"/register"}>Sign up</Link>{" "}
        </span>
      </Box>
    </>
  );
};

export { Login };
