import { useState } from "react";
import Link from "next/link";
import { AppleIcon, GoogleIcon } from "@/assets";
import { FormWithEmail } from "./Form/FormWithEmail";
import { FormWithPhone } from "./Form/FormWithPhone";
import { Box, Button } from "@chakra-ui/react";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("email");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailOption, setEmailOption] = useState({
    email: "",
    password: "",
  });

  const handleSelected = (option) => {
    setSelectedOption(option);
  };

  const handlePhone = (value) => {
    setPhone(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmailOption((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "email") {
      console.log("Submitting email:", emailOption);
    } else {
      console.log("Submitting phone number:", { phone, password });
    }
  };
  console.log(password);
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
        <Button
          type="submit"
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

      <div className="or">or</div>

      <Button
        border={"1px solid #1A1A1A"}
        outline={"none"}
        color={"#000"}
        background={"transparent"}
        padding={"25px 14px"}
        borderRadius={"16px"}
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
        fontSize={"16px"}
      >
        <GoogleIcon /> Continue with Google
      </Button>
      <Button
        border={"1px solid #1A1A1A"}
        outline={"none"}
        color={"#000"}
        background={"transparent"}
        padding={"25px 14px"}
        borderRadius={"16px"}
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
        fontSize={"16px"}
      >
        <AppleIcon /> Continue with Apple
      </Button>
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
