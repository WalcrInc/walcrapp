import { BackIcon, DeleteIcon } from "@/assets";
import React, { useState } from "react";
import { AddCashStyle } from "./AddCash.style";
import { Button } from "@chakra-ui/react";

const AddCash = () => {
  const [input, setInput] = useState("");

  // Function to handle number input
  const handleNumberInput = (number) => {
    // Check if the input already contains a dot
    if (number === "." && input.includes(".")) {
      return; // Do nothing if a dot is already present
    }
    setInput((prevInput) => prevInput + number);
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
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
        <input type="text" value={"$" + input} placeholder="$0.00" readOnly />
      </div>

      <Button
        className="button-submit"
        color={"#fff"}
        size={"lg"}
        margin={"auto"}
        background={"#1a1a1a"}
        width={"90%"}
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
