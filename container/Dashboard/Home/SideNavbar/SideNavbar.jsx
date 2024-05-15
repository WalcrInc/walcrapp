import { useState, useEffect } from "react";
import { SideNavContainer } from "./Sidebar.style";
import {
  AboutIcon,
  AddressIcon,
  CardIcon,
  Logo,
  LogoutIcon,
  MessageIcon,
  PrivacyIcon,
  SupportIcon,
} from "@/assets";
import Link from "next/link";
import { useDispatch } from "react-redux";
import useRoutes from "@/hooks/Routes/Routes";
import { toast } from "react-toastify";
import { reset } from "@/features/Redux/authSlice";

const SideNavbar = ({ showNav, setShowNav, info }) => {
  const { handleLoginRoute } = useRoutes();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(reset());
    toast.success("You have been successfully logged out", {
      theme:"dark"
    });
    handleLoginRoute();
  };
  return (
    <SideNavContainer onClick={() => setShowNav(!showNav)}>
      <div className="info">
        <div>
          <p>{info?.name}</p>
          <span>{info?.address}</span>
        </div>
      </div>

      <div className="links">
        <Link href={"/card"}>
          {" "}
          <p>
            <CardIcon />
            Saved Cards
          </p>
        </Link>

        <Link href={"/address"}>
          <p>
            <AddressIcon /> Address
          </p>
        </Link>

        <Link href={"/message"}>
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
        <p onClick={handleLogout}>
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
