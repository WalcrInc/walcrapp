import { BackIcon, DeleteIcon } from "@/assets";
import React, { useState } from "react";
import { AddCashStyle } from "./AddCash.style";
import { Button } from "@chakra-ui/react";

const AddCash = () => {
  const [input, setInput] = useState(""); // State for the displayed input including the dollar sign
  const [value, setValue] = useState(""); // State for the numerical value without the dollar sign

  // Function to handle number input
  const handleNumberInput = (number) => {
    // Check if the input already contains a dot
    if (number === "." && value.includes(".")) {
      return; // Do nothing if a dot is already present
    }
    setInput((prevInput) => prevInput + number); // Update displayed input with dollar sign
    setValue((prevValue) => prevValue + number); // Update numerical value
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1)); // Remove last character from displayed input
    setValue((prevValue) => prevValue.slice(0, -1)); // Remove last character from numerical value
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log("Submitted value:", value); // Submit numerical value without dollar sign
    // Add your logic for submitting the value to backend here
    setInput(""); // Reset displayed input
    setValue(""); // Reset numerical value
  };

  return (
    <AddCashStyle>
      <header>
        <span>
          <BackIcon />
        </span>
        <h1>Add cash</h1>
        <span style={{ color: "white" }}>.</span>
      </header>
      {/* Display input */}
      <div className="input">
        <p>Amount</p>
        <input
          type="text"
          value={"$" + input} // Prepend the dollar sign to the displayed input
          placeholder="$0.00"
          readOnly
        />
      </div>

      <Button
        className="button-submit"
        color={"#fff"}
        size={"lg"}
        margin={"auto"}
        background={"#1a1a1a"}
        width={"90%"}
        onClick={handleSubmit}
      >
        Add $ {input}
      </Button>
      <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((number) => (
          <button
            className="number-button"
            key={number}
            onClick={() => handleNumberInput(number)}
          >
            {number}
          </button>
        ))}
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleBackspace}
        >
          <DeleteIcon />
        </button>
      </div>
    </AddCashStyle>
  );
};

export { AddCash };
