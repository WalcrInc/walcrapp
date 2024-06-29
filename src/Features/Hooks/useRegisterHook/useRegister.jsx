import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "@/Features/Auth/authSlice";

const useRegister = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
 
  return {  show, handleShow, keepSignedIn, setKeepSignedIn };
};

export default useRegister;
