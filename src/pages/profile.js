import { BottomNavbar } from "@/components/BottomNavbar";
import { Profile } from "@app/Dashboard/Profile";
import React from "react";

const profile = () => {
  return (
    <div>
      <Profile />
      <BottomNavbar />
    </div>
  );
};

export default profile;
