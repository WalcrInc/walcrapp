import { useState, useEffect } from "react";
import { SideNavContainer } from "./Sidebar.style";
import {
  AboutIcon,
  AddressIcon,
  CalendarIcon,
  CardIcon,
  LockIcon,
  Logo,
  LogoutIcon,
  MessageIcon,
  NextIcon,
  PrivacyIcon,
  SettingsIcon,
  SharedIcon,
  SpannerIcon,
  SupportIcon,
  TaskIcon,
  W_Logo,
} from "@/assets";
import Link from "next/link";
import { useDispatch } from "react-redux";
import useRoutes from "@/hooks/Routes/Routes";
import { toast } from "react-toastify";
import { reset } from "@/features/Redux/authSlice";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const SideNavbar = ({ showNav, setShowNav, info }) => {
  const { handleLoginRoute } = useRoutes();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(reset());
    toast.success("You have been successfully logged out", {
      theme: "dark",
    });
    handleLoginRoute();
  };
  return (
    <SideNavContainer>
      <div className="right">
        <div className="info-link">
          <div className="info">
            <div className="image-container">
              <Image
                src={"/images/profile.svg"}
                height={82}
                width={82}
                alt="profile-picture"
              />
            </div>
            <div className="name-address">
              <p>
                {info?.firstname} {info?.lastname}
              </p>
              <span>{info?.address}</span>
            </div>
          </div>
          <div className="links">
            <Link href={"/dashboard"}>
              {" "}
              <p>
                <TaskIcon />
                My Tasks
              </p>
            </Link>
            <Link href={"/dashboard"}>
              {" "}
              <p>
                <SpannerIcon />
                Task Request
              </p>
            </Link>
            <Link href={"/dashboard"}>
              {" "}
              <p>
                <SharedIcon />
                Saved Taskwalkers
              </p>
            </Link>
            <Link href={"/card"}>
              {" "}
              <p>
                <CardIcon />
                Wallets & Payment
              </p>
            </Link>
            <Link href={"/dashboard"}>
              {" "}
              <p>
                <CalendarIcon />
                Schedule Prefrences
              </p>
            </Link>
            <Link href={"/dashboard"}>
              {" "}
              <p>
                <LockIcon />
                Privacy & Data Settings
              </p>
            </Link>

            <Link href={"/address"}>
              <p>
                <AddressIcon /> Location Settings
              </p>
            </Link>

            <Link href={"/message"}>
              {" "}
              <p>
                <MessageIcon /> Messages
              </p>
            </Link>
          </div>
        </div>

        <Accordion allowMultiple>
          <AccordionItem
            background={"transparent"}
            border={"none"}
            outline={"none"}
          >
            <h2>
              <AccordionButton
                _focus={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                }}
                padding={"0"}
              >
                <Box as="span" flex="1" textAlign="left">
                  Settings and Support
                </Box>
                <AccordionIcon fontSize={"30px"} color={"#F18341"} />
              </AccordionButton>
            </h2>
            <AccordionPanel padding={"10px 0"}>
              <div className="support">
                <p>
                  <SettingsIcon />
                  Settings and Privacy{" "}
                </p>
                <Link href={"/help"}>
                <p>
                  <SupportIcon /> Help Center
                </p>
                </Link>

                <p onClick={handleLogout}>
                  <LogoutIcon /> Logout{" "}
                </p>

                <div className="task-work">
                  {/* <p className="logo">
                    <W_Logo />
                    Walcr
                  </p>

                  <p className="orange">
                    {" "}
                    <p className="dot"></p> TaskWalcr{" "}
                  </p> */}
                  <p>Get Started with Walcr Taskwalker</p>
                  <NextIcon/>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="left" onClick={() => setShowNav(!showNav)}></div>
    </SideNavContainer>
  );
};

export { SideNavbar };
