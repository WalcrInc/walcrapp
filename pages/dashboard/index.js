import Head from "next/head";
import { BottomNavbar } from "@/components/BottomNavbar";
import { Home } from "@/container/Dashboard/Home";

import React from "react";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styleovrride.css" /> 
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <div>
      <Home />
      <BottomNavbar />
    </div>
    </>
  );
};

export default dashboard;
