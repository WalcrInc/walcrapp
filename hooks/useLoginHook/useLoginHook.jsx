import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "@/features/Redux/authSlice";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const useLogin = () => {
  const { isSuccess, isError, user, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("email");

  const handleShow = () => {
    setShow(!show);
  };
  const handleSelected = (option) => {
    setSelectedOption(option);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      emailPassword: "",
      phoneNumber: "+1",
      phonePassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (selectedOption === "email") {
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.emailPassword) {
          errors.emailPassword = "Required";
        } else if (values.emailPassword.length < 8) {
          errors.emailPassword = "Password must be at least 8 characters";
        }
      } else if (selectedOption === "phone") {
        if (!values.phoneNumber) {
          errors.phoneNumber = "Required";
        }
        if (!values.phonePassword) {
          errors.phonePassword = "Required";
        } else if (values.phonePassword.length < 8) {
          errors.phonePassword = "Password must be at least 8 characters";
        }
      }

      console.log(errors);
      return errors;
    },
    onSubmit: async (values) => {
      console.log("object");
      let formData;
      if (selectedOption === "email") {
        formData = { email: values.email, password: values.emailPassword };
        dispatch(login(formData));
      } else if (selectedOption === "phone") {
        formData = {
          phoneNumber: values.phoneNumber,
          password: values.phonePassword,
        };
      }
      console.log("submitted:", formData);
    },
  });

  // useEffect(() => {
  //   if (isSuccess && user) {
  //     <Alert status="success">
  //       <AlertIcon />
  //       {message}
  //     </Alert>;
  //     router.push("/dahboard");
  //   }

  //   if (isError) {
  //     <Alert status="error">
  //       <AlertIcon />
  //       {message}
  //     </Alert>;
  //   }
  // }, [isError, message, isSuccess, user]);

  return {
    show,
    selectedOption,
    handleShow,
    handleSelected,
    formik,
  };
};

export default useLogin;
