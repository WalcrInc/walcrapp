import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "@/features/Redux/authSlice";

const useRegister = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      // phone_number: "+1",
      password: "",
      // address: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstname) {
        errors.firstname = "Required";
      }
      if (!values.lastname) {
        errors.lastname = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      // if (!values.phone_number) {
      //   errors.phone_number = "Required";
      // } else if (!/^\+1\d{10}$/.test(values.phone_number)) {
      //   errors.phone_number = "Invalid US phone number";
      // }

      // if (!values.address) {
      //   errors.address = "Required";
      // }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      console.log(errors)
      return errors;
      
    },
    onSubmit: async (values) => {
      console.log(values);
      dispatch(register(values));
    },
  });
  return { formik, show, handleShow, keepSignedIn, setKeepSignedIn };
};

export default useRegister;
