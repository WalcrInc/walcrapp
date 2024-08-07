import React, { useState } from "react";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";
import { MessageStyle } from "./Message.style";

const Message = () => {
  const [step, setStep] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelected = (message) => {
    setSelectedMessage(message);
    setStep(2);
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const renderMessage = (message) => {
    switch (message?.message) {
      case "Yes":
        return (
          <StepTwo
            handleNext={handleNext}
            handlePrev={handlePrev}
            message={message}
          />
        );
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
