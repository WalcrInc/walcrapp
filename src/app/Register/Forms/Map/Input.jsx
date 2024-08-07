// AddressInput.js

import { Button, Input } from "@chakra-ui/react";
import { InputStyle } from "./Input.style";

const AddressInput = ({ value, onChange, onSubmit }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <InputStyle>
      <div className="text">
        <h1> Address</h1>
        <p>Add a primary address</p>
      </div>
      <form onSubmit={onSubmit}> {/* Add onSubmit handler */}
        <Input
          boxShadow={"0px 0px 0px 1px #CDD1DC"}
          type="text"
          placeholder="Enter your address"
          value={value}
          onChange={handleChange}
          size={"lg"}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#1a1a1a",
            width: "100%",
            color: "#ffffff",
            padding: "1rem",
            borderRadius: "1rem"
          }}
        >
          Continue
        </button>
      </form>
    </InputStyle>
  );
};

export default AddressInput