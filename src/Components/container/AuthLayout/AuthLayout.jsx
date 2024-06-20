import React from "react";
import { AuthStyle } from "./AuthLayout.style";

const AuthLayout = ({ children }) => {
  return <AuthStyle>{children}</AuthStyle>;
};

export default AuthLayout;
