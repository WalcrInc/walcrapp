import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login,  } from "@/features/Redux/authSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const useLogin = () => {
  const { isSuccess, isError, user, message, isLoading } = useSelector(
    (state) => state.auth
  );
  const router  = useRouter()
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("email");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
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

  useEffect(() => {
    if (isSuccess && user) {
    
      router.push("/dashboard");
    }

    if (isError) {
      toast.error(message,{
        theme:"dark"
      })
      console.log(message)
    }
  }, [isError, message, isSuccess, user]);

  return {
    show,
    selectedOption,
    handleShow,
    handleSelected,
    formik,
    keepSignedIn,
    setKeepSignedIn,
    isLoading
  };
};

export default useLogin;
