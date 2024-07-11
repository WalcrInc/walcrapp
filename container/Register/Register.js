import React, { useState, useRef, useEffect } from "react";
import useRegister from "@/hooks/useRegisterHook/useRegister";
import { BasicInfo } from "./Forms/BasicInfo/BasicInfo";
import { OTP } from "./Forms/OTP";
import { Phone } from "./Forms/Phone";
import FinalMap from "./Forms/Map/FinalMap";

const Register = () => {
  const [step, setStep] = useState(1);
  const { formik } = useRegister();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let startY;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Prevent scrolling up when already at the top
      if (scrollTop <= 0 && currentY > startY) {
        e.preventDefault();
      }

      // Prevent scrolling down when already at the bottom
      if (scrollTop + clientHeight >= scrollHeight && currentY < startY) {
        e.preventDefault();
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };


  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        padding: "0rem 0 3rem",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {step === 1 && <BasicInfo handleNext={handleNext} />}
      {step === 2 && <FinalMap handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 3&& <Phone handlePrev={handlePrev} handleNext={handleNext} />}
      {step === 4&& <OTP handlePrev={handlePrev} handleNext={handleNext} />}
    </div>
  );
};

export { Register };
