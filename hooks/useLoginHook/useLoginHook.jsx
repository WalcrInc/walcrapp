import React, { useState } from 'react'

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
    
  return {show,emailOption,password, phone,selectedOption, handleShow,  handleEmailChange, handlePassword, handlePhone, handleSelected, handleSubmit}
}

export default useLogin