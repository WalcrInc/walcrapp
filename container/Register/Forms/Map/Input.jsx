// AddressInput.js
import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { InputStyle } from "./Input.style";

const AddressInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <InputStyle>
      <div className="text">
        <h1> Address</h1>
        <p>Add a delivery address</p>
      </div>
      <form>
        <Input
          boxShadow={"0px 0px 0px 1px #CDD1DC"}
          type="text"
          placeholder="Enter your address"
          value={value}
          onChange={handleChange}
          size={"lg"}
        />
        <Button
          size={"lg"}
          background={"#1A1A1A"}
          color={"#fff"}
          width={"100%"}
        >
          Continue
        </Button>
      </form>
    </InputStyle>
  );
};

export default AddressInput;
