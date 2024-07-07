import { useState } from "react";
import Link from "next/link";
import { AppleIcon, GoogleIcon, Spinner, SearchIconSmall } from "@/assets";
import { FormWithEmail } from "./Form/FormWithEmail";
import { FormWithPhone } from "./Form/FormWithPhone";
import { Box } from "@chakra-ui/react";
import useLogin from "@/hooks/useLoginHook/useLoginHook";
import { CustomButton } from "@/components/Button/Button";

const Login = () => {
  const {
    handleSelected,
    handlePhone,
    selectedOption,
    formik,
    setKeepSignedIn,
    keepSignedIn,
    isLoading,
  } = useLogin();

  return (
    <main>
      <div className="header">
        <h1>Sign In</h1>
        <p>Welcome back. Log in to Walcr</p>
      </div>

      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <CustomButton variant={"transparent"}>
          <GoogleIcon /> Continue with Google
        </CustomButton>

        <CustomButton variant={"transparent"}>
          <AppleIcon /> Continue with Apple
        </CustomButton>
      </Box>

      <div className="or">or</div>

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

      <form onSubmit={formik.handleSubmit}>
        {selectedOption === "email" && <FormWithEmail formik={formik} />}
        {selectedOption === "phone" && (
          <FormWithPhone formik={formik} handlePhone={handlePhone} />
        )}

        <Box
          marginBottom={"20px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <label className="checkbox">
            <input
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              type="checkbox"
            />{" "}
            Keep me signed in
          </label>
          <span className="span">
            <Link
              href={"/forgot-password"}
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                display: "flex",
                gap: "8px",
                alignItems: "center"
              }}
            >
              <i style={{ fontSize: "1rem" }}><SearchIconSmall /></i>
              <p>Find my account</p>
            </Link>
          </span>
        </Box>
        {/* <button type="submit">heyy</button> */}
        <CustomButton
          type={"submit"}
          variant={"default"}
          onClick={formik.handleSubmit}
        >
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // border:"1px solid red" ,
                // margin:"auto"
              }}
            >
              {/* "heyy" */}
              <Spinner />
            </div>
          ) : (
            "Continue"
          )}
        </CustomButton>
        <Link
          href={"/become_taskwalcr"}
          style={{
            textAlign: "center",
            color: "#8C92AB",
          }}
        >
          Not a regular user? Sign in as Taskwalker
        </Link>
      </form>

      <div
        style={{ marginTop: "auto", textAlign: 'center' }}
      >
        Don’t have an account?
        <span style={{ color: "#1A1A1A", fontWeight: "700" }}>
          {" "}
          <Link href={"/register"}>Sign up</Link>{" "}
        </span>
      </div>
    </main>
  );
};

export { Login };
