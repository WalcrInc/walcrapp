import { useState } from "react";
import { LoginStyle } from "./Login.style";
import { Input, FormControl, FormLabel, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { AppleIcon, GoogleIcon } from "@/assets";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on the selected option (email or phone)
    if (selectedOption === "email") {
      console.log("Submitting email:", email);
    } else {
      console.log("Submitting phone number:", phoneNumber);
    }
  };
  const handleSelected = (option) => {
    setSelectedOption(option);
  };
  return (
    <LoginStyle>
      <div className="header">
        <h1>Login</h1>
        <p>Welcome back to the app</p>
      </div>

      <div className="options">
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
      </div>
      {selectedOption === "email" && (
        <form>
          <FormControl>
            <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
              Email address
            </FormLabel>
            <Input
              box-shadow={"0px 0px 0px 1px #CDD1DC"}
              padding={"25px 14px"}
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
              Password
            </FormLabel>
            <Input
              box-shadow={"0px 0px 0px 1px #CDD1DC"}
              padding={"25px 14px"}
              type="password"
            />
          </FormControl>
          <Box display={"flex"} justifyContent={"space-between"}>
            <div className="checkbox">
              <input type="checkbox" /> Keep me signed in
            </div>
            <span className="span">
              <Link href={"/login"}>Forgot password</Link>
            </span>
          </Box>
          <Button
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
      )}
      {selectedOption === "phone" && (
        <form>
          <FormControl>
            <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
              Phone number
            </FormLabel>
            <Input
              box-shadow={"0px 0px 0px 1px #CDD1DC"}
              padding={"25px 14px"}
              type="tel"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"16px"} color={"#1A1A1A"} fontWeight={"700"}>
              Password
            </FormLabel>
            <Input
              box-shadow={"0px 0px 0px 1px #CDD1DC"}
              padding={"25px 14px"}
              type="password"
            />
          </FormControl>
          <Box display={"flex"} justifyContent={"space-between"}>
            <div className="checkbox">
              <input type="checkbox" /> Keep me signed in
            </div>
            <span className="span">
              <Link href={"/login"}>Forgot password</Link>
            </span>
          </Box>
          <Button
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
      )}

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
      <Box
        position={"absolute"}
        bottom={"10px"}
        left={"0"}
        right={"0"}
        textAlign={"center"}
        color={"#8C92AB"}
      >
        Don’t have an account?
        <span style={{ color: "#1A1A1A", fontWeight: "700" }}>
          {" "}
          <Link href={"/login"}>Sign up</Link>{" "}
        </span>
      </Box>
    </LoginStyle>
  );
};

export { Login };
