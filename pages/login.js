import AuthLayout from "@/container/AuthLayout/AuthLayout";
import { Login } from "@/container/Login";
import React from "react";

const login = () => {
  return (
    <div
      style={{
        height: "100dvh",
        padding: "0rem 0 3rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AuthLayout>
        <Login />
      </AuthLayout>
    </div>
  );
};

export default login;
