import { useState } from "react";
import Link from "next/link";
import { AppleIcon, GoogleIcon } from "@/assets";
import { FormWithEmail } from "./Form/FormWithEmail";
import { FormWithPhone } from "./Form/FormWithPhone";

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
    <>
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
      {selectedOption === "email" && <FormWithEmail />}
      {selectedOption === "phone" && <FormWithPhone />}

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
