import AuthLayout from "@/container/AuthLayout/AuthLayout";
import { Login } from "@/container/Login";
import React from "react";

const login = () => {
  return (
    <div
      style={{
        height: "100dvh",
        padding: "3rem 0 3rem",
        overflow: "scroll",
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
