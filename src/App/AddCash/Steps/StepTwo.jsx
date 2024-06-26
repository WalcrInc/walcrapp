import { DeleteIcon } from "@/Assets";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const StepTwo = () => {
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

  const handleBackspace = () => {
    setPin((prevInput) => prevInput.slice(0, -1));
  };
  
  
  return (
    <>
    
  
      <div className="number-body">
      <Input
          value={pin}
          fontSize={"40px"}
          textAlign={"center"}
          border={"none"}
          onChange={handleChange}
          readOnly
          placeholder="****"
        />
         <Button
          className="button-submit"
          color={"#fff"}
          size={"lg"}
          margin={"auto"}
          background={"#1a1a1a"}
          width={"90%"}
        >gggg</Button>

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
