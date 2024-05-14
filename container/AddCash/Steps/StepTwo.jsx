import { DeleteIcon } from "@/assets";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const StepTwo = ({  handleBackspace }) => {
  const [pin, setPin] = useState("");
  const handleChange = (e) => {
    setPin(e.target.value);
  };
  

 
  const handleNumberInput = (number) => {
    // Check if the pin length is already 4
    if (pin?.length === 4) {
      return; // Return early if the PIN is already 4 digits
    }
  
    // Update the PIN with the new number
    setPin((prevPin) => prevPin + number);
  };
  
  
  return (
    <>
      <div>heyy</div>
      <div>
        <Input
          value={pin}
          onChange={handleChange}
          readOnly
        />
      </div>

      <div className="number-body">
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
      </div>
    </>
  );
};

export { StepTwo };
