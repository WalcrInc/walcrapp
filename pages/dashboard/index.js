import Head from "next/head";
import { BottomNavbar } from "@/components/BottomNavbar";
import { Home } from "@/container/Dashboard/Home";

import React from "react";

const dashboard = () => {
  return (
    <>
      <div>
        <Home />
        <BottomNavbar />
      </div>
    </>
  );
};

export default dashboard;
