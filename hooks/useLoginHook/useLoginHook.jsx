import React, { useState } from 'react'
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
        phoneNumber: "",
        phonePassword: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .when("selectedOption", {
            is: "email",
            then: Yup.string().required("Required"),
          }),
        emailPassword: Yup.string().when("selectedOption", {
          is: "email",
          then: Yup.string()
            .required("Required")
            .min(8, "Must be at least 8 characters")
            .matches(
              /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
              "Must contain at least one uppercase letter and one special character"
            ),
        }),
        phoneNumber: Yup.string().when("selectedOption", {
          is: "phone",
          then: Yup.string()
            .phone(null, true,  "Please enter a valid phone number")
            .required("Required"),
        }),
        phonePassword: Yup.string().when("selectedOption", {
          is: "phone",
          then: Yup.string()
            .required("Required")
            .min(8, "Must be at least 8 characters")
            .matches(
              /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>.,?])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;<>.,?]{8,}$/,
              "Must contain at least one uppercase letter and one special character"
            ),
        }),
      }),
  
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
       console.log("submitted:", formData)
  
      },
    });
    
  return {show,emailOption,password, phone,selectedOption, handleShow,  handleEmailChange, handlePassword, handlePhone, handleSelected, formik}
}

export default useLogin