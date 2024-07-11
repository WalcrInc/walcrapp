import React, { useEffect } from "react";
import { AuthStyle } from "./AuthLayout.style";

const AuthLayout = ({ children }) => {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    // Add the class to the body to prevent scrolling
    document.body.classList.add("no-scroll");

    // Add event listeners to prevent touch and drag on the body
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
    document.body.addEventListener('wheel', preventDefault, { passive: false });

    // Cleanup function to remove the class and event listeners
    return () => {
      document.body.classList.remove("no-scroll");
      document.body.removeEventListener('touchmove', preventDefault);
      document.body.removeEventListener('wheel', preventDefault);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        padding: "0rem 0 3rem",
        overflowY: "auto", // Allow vertical scrolling inside this div
        display: "flex",
        flexDirection: "column",
        overscrollBehavior: "none"
      }}
    >
      <AuthStyle>{children}</AuthStyle>
    </div>
  );
};

export default AuthLayout;
