import React from "react";
import { AuthStyle } from "./AuthLayout.style";

const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        height: "100dvh",
        padding: "0rem 0 3rem",
        overflow: "scroll",
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
