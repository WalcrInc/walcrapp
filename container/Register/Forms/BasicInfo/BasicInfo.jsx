import React, { useState, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import {
  AlertIcon,
  AppleIcon,
  DontShow,
  GoogleIcon,
  PasswordIcon,
  Show,
  DangerIconRed,
} from "@/assets";
import { CustomButton } from "@/components/Button/Button";
import useRegister from "@/hooks/useRegisterHook/useRegister";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Link from "next/link";
import { BasicInfoStyle } from "./BasicInfo.style";

const validateForm = (values) => {
  const errors = {};
  if (!values.firstname) errors.firstname = "Firstname is a required field";
  if (!values.lastname) errors.lastname = "Lastname is a required field";
  if (!values.email) {
    errors.email = "Email is a required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = `${values.email} is not a valid email address`;
  }
  if (!values.password) {
    errors.password = "Password is a required field";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  return errors;
};

const BasicInfo = ({ handleNext }) => {
  const { show, handleShow, keepSignedIn, setKeepSignedIn } = useRegister();
  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState({});

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validate: validateForm,
    onSubmit: async (values) => {
      const serializedData = JSON.stringify(values);
      localStorage.setItem("formDataStep1", serializedData);
      handleNext();
    },
  });

  useEffect(() => {
    setFormErrors(formik.errors);
  }, [formik.errors]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (step === 1 && !formErrors.email && !formErrors.password && formik.values.email && formik.values.password) {
      setStep(2);
    } else {
      formik.handleSubmit();
    }
  };

  const renderFormFields = useMemo(() => (
    <>
      {step === 2 && (
        <>
          <FormControl>
            <FormLabel fontSize="16px" color="#1A1A1A" fontWeight="700">
              First Name
            </FormLabel>
            <Input
              boxShadow="0px 0px 0px 1px #CDD1DC"
              padding="25px 14px"
              type="text"
              placeholder="First Name"
              border={formik.touched.firstname && formErrors.firstname ? "1px solid #FB2047" : "1px solid #CDD1DC"}
              {...formik.getFieldProps("firstname")}
            />
            {formik.touched.firstname && formErrors.firstname && (
              <Box display="flex" alignItems="center" gap="6px" fontSize="12px" color="#FB2047" marginTop="10px">
                <DangerIconRed />
                <p>{formErrors.firstname}</p>
              </Box>
            )}
          </FormControl>
          <FormControl>
            <FormLabel fontSize="16px" color="#1A1A1A" fontWeight="700">
              Last Name
            </FormLabel>
            <Input
              boxShadow="0px 0px 0px 1px #CDD1DC"
              padding="25px 14px"
              type="text"
              placeholder="Last Name"
              border={formik.touched.lastname && formErrors.lastname ? "1px solid #FB2047" : "1px solid #CDD1DC"}
              {...formik.getFieldProps("lastname")}
            />
            {formik.touched.lastname && formErrors.lastname && (
              <Box display="flex" alignItems="center" gap="6px" fontSize="12px" color="#FB2047" marginTop="10px">
                <DangerIconRed />
                <p>{formErrors.lastname}</p>
              </Box>
            )}
          </FormControl>
        </>
      )}
      {step === 1 && (
        <>
          <FormControl>
            <FormLabel fontSize="16px" color="#1A1A1A" fontWeight="700">
              Email address
            </FormLabel>
            <Input
              boxShadow="0px 0px 0px 1px #CDD1DC"
              padding="25px 14px"
              type="email"
              placeholder="Email Address"
              border={formik.touched.email && formErrors.email ? "1px solid #FB2047" : "1px solid #CDD1DC"}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formErrors.email && (
              <Box display="flex" alignItems="center" gap="6px" fontSize="12px" color="#FB2047" marginTop="10px">
                <DangerIconRed />
                <p>{formErrors.email}</p>
              </Box>
            )}
          </FormControl>
          <FormControl>
            <FormLabel fontSize="16px" color="#1A1A1A" fontWeight="700">
              Password
            </FormLabel>
            <Box
              display="flex"
              alignItems="center"
              borderRadius="6px"
              padding="5px 15px"
              focusBorderColor="0.5px solid #CDD1DC"
              border={formik.touched.password && formErrors.password ? "1px solid #FB2047" : "1px solid #CDD1DC"}
            >
              <Input
                width="100%"
                border="none"
                type={show ? "text" : "password"}
                padding="0"
                placeholder="******"
                {...formik.getFieldProps("password")}
              />
              <span onClick={handleShow}>
                {show ? <PasswordIcon /> : <DontShow />}
              </span>
            </Box>
            {formik.touched.password && formErrors.password && (
              <Box display="flex" alignItems="center" gap="6px" fontSize="12px" color="#FB2047" marginTop="10px">
                <DangerIconRed />
                <p>{formErrors.password}</p>
              </Box>
            )}
          </FormControl>
        </>
      )}
    </>
  ), [step, formik.touched, formErrors, formik.values, show, handleShow]);

  return (
    <BasicInfoStyle>
      <div className="header">
        <h1>Create an account</h1>
        <p>Welcome! Please enter your details to continue</p>
      </div>

      <Box display="flex" flexDirection="column" gap="10px">
        <CustomButton variant="transparent">
          <GoogleIcon /> Continue with Google
        </CustomButton>
        <CustomButton variant="transparent">
          <AppleIcon /> Continue with Apple
        </CustomButton>
      </Box>

      <div className="or">or</div>

      <form onSubmit={handleFormSubmit}>
        {renderFormFields}
        <Box display="flex" justifyContent="space-between">
          <label className="checkbox">
            <input
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              type="checkbox"
            />{" "}
            I agree to the <span>Terms of Service </span> and{" "}
            <span>Policy</span>
          </label>
        </Box>

        <CustomButton variant="default" type="submit">
          Continue
        </CustomButton>
        <Link
          href="/become_taskwalcr"
          style={{
            textAlign: "center",
            color: "#8C92AB",
          }}
        >
          Not a regular user? Sign up as Taskwalker
        </Link>
      </form>

      <Box textAlign="center" color="#8C92AB" marginTop="auto">
        Already have an account?
        <span style={{ color: "#1A1A1A", fontWeight: "700" }}>
          {" "}
          <Link href="/login">Sign In</Link>{" "}
        </span>
      </Box>
    </BasicInfoStyle>
  );
};

export { BasicInfo };