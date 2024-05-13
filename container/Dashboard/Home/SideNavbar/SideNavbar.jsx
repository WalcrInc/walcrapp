import { useState, useEffect } from "react";
import { SideNavContainer } from "./Sidebar.style";
import {
  AboutIcon,
  AddressIcon,
  CardIcon,
  EmailIcon,
  LocationIcon,
  Logo,
  LogoutIcon,
  MessageIcon,
  PrivacyIcon,
  SupportIcon,
} from "@/assets";
import Link from "next/link";
import useFetchData from "@/hooks/useFetchDataHook/useFetchData";
import { useSelector } from "react-redux";

const SideNavbar = ({ showNav, setShowNav, info }) => {
  return (
    <SideNavContainer onClick={() => setShowNav(!showNav)}>
      <div className="info">
        <div>
          <p>{info?.name}</p>
          <span>{info?.address}</span>
        </div>
      </div>
      <div className="links">
        <Link href={"/"}>
          {" "}
          <p>
            <CardIcon />
            Saved Cards
          </p>
        </Link>

        <Link href={"/"}>
          <p>
            <AddressIcon /> Address
          </p>
        </Link>

        <Link href={"/"}>
          {" "}
          <p>
            <MessageIcon /> Messages
          </p>
        </Link>
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
