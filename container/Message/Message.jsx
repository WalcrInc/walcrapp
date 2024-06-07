import React, { useState } from "react";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { MessageStyle } from "./Message.style";

const Message = () => {
  const [step, setStep] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelected = (message) => {
    setSelectedMessage(message); // Store selected message in state
    setStep(2); // Move to step 2
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const renderMessage = (message) => {
    switch (message?.message) { // Ensure message is defined
      case "Yes":
        return <StepTwo handleNext={handleNext} handlePrev={handlePrev} message={message} />; // Pass message as prop
      default:
        return <div>No message selected</div>;
    }
  };

  return (
    <MessageStyle>
      <div className="body">
        {step === 1 && (
          <StepOne
            handleSelected={handleSelected}
            step={step}
            handleNext={handleNext}
          />
        )}
        {step === 2 && <>{renderMessage(selectedMessage)}</>}
      </div>
    </MessageStyle>
  );
};

export { Message };
