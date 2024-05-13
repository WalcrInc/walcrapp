import React from "react";
import { SideNavContainer } from "./Sidebar.style";
import {
  AboutIcon,
  Logo,
  LogoutIcon,
  PrivacyIcon,
  SupportIcon,
} from "@/assets";

const SideNavbar = () => {
  return (
    <SideNavContainer>
      <div className="info">
        <p> Brandon Joe</p>
      </div>
      <div className="links">
        <p>Saved Cards</p>
        <p>Address</p>
        <p>Messages</p>
      </div>
      <div className="support">
        <p>
          <SupportIcon /> Help and Support{" "}
        </p>
        <p>
          <PrivacyIcon /> Privacy policy{" "}
        </p>
        <p>
          <AboutIcon /> About us{" "}
        </p>
        <p>
          <LogoutIcon /> Logout{" "}
        </p>
      </div>
      <div className="task-work">
        <p>
          <Logo />
          Become a Taskwalker
        </p>
      </div>
    </SideNavContainer>
  );
};

export { SideNavbar };
