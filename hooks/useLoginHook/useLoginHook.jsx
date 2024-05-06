import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

const useLogin = () => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("email");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailOption, setEmailOption] = useState({
    email: "",
    password: "",
  });

  const handleShow = () => {
    setShow(!show);
  };
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
    console.log("HandleSubmit called"); // Debug statement to check if handleSubmit is called
    console.log("Selected option:", selectedOption); // Log selectedOption to check its value

    e.preventDefault();
    if (selectedOption === "email") {
      console.log("Submitting email:", emailOption);
    } else {
      console.log("Submitting phone number:", { phone, password });
    }
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

      console.log(errors)
      return errors;
    },
    onSubmit: async (values) => {
      console.log("object");
      let formData;
      if (selectedOption === "email") {
        formData = { email: values.email, password: values.emailPassword };
      } else if (selectedOption === "phone") {
        formData = {
          phoneNumber: values.phoneNumber,
          password: values.phonePassword,
        };
      }
      console.log("submitted:", formData);
    },
  });

  return {
    show,
    emailOption,
    password,
    phone,
    selectedOption,
    handleShow,
    handleEmailChange,
    handlePassword,
    handlePhone,
    handleSelected,
    formik,
  };
};

export default useLogin;
