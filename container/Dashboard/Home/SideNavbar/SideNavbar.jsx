import { useState, useEffect } from "react";
import { SideNavContainer } from "./Sidebar.style";
import {
  AboutIcon,
  AddressIcon,
  BackIconX,
  CalendarIcon,
  CardIcon,
  EditIcon,
  LockIcon,
  Logo,
  LogoutIcon,
  LogoutIconX,
  MessageIcon,
  NextIcon,
  PrivacyIcon,
  SettingsIcon,
  UserIcon,
  SpannerIcon,
  SupportIcon,
  TaskIcon,
  W_Logo,
  MarketplaceIcon,
  ActiveOrdersIcon,
  NotificationIcon,
  SettingsAndPrivacyIcon,
  SearchIconSmall,
  EllipsisIcon
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";

const SideNavbar = ({ showNav, setShowNav, info, setShowNotification }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleLoginRoute } = useRoutes();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(reset());
    toast.success("You have been successfully logged out", {
      theme: "dark",
    });
    handleLoginRoute();
  };

  const handleShowNotification = () => {
    setShowNav(false)
    setShowNotification(true)
  }

  return (
    <SideNavContainer>
      <div className="right">
        <div className="right-info">
          <div className="info-link">
            <button onClick={() => setShowNav(false)} style={{ marginLeft: "-8px" }}><BackIconX /></button>
            <form>
              <input
                type="text"
                placeholder="Search Walcr Marketplace"
              />
              <button><SearchIconSmall /></button>
            </form>

            <hr style={{ width: "100%" }} />
            <div className="links">

              <Link href={"/dashboard"} className="active link_info">
                {" "}
                <p>
                  <TaskIcon />
                  My Tasks
                </p>
              </Link>
              <Link href={"/dashboard"} className="inactive link_info">
                {" "}
                <p>
                  <MarketplaceIcon />
                  Taskwalker Marketplace
                </p>
              </Link>

              <Link href={"/dashboard"} className="inactive link_info">
                {" "}
                <p>
                  <UserIcon />
                  Saved Taskwalkers
                </p>
              </Link>
              <Link href={"/card"} className="inactive link_info">
                {" "}
                <p>
                  <CardIcon />
                  Wallets & Payment
                </p>
              </Link>
              <Link href={"/dashboard"} className="inactive link_info">
                {" "}
                <p>
                  <CalendarIcon />
                  Schedule Prefrences
                </p>
                <i className="badge">3</i>
              </Link>
              <Link href={"/dashboard"} className="inactive link_info">
                {" "}
                <p>
                  <LockIcon />
                  Privacy & Data Settings
                </p>
              </Link>

              <Link href={"/address"} className="inactive link_info">
                <p>
                  <AddressIcon />  Address Settings
                </p>
              </Link>

              {/* <Link href={"/message"} className="inactive link_info">
                <p>
                  <MessageIcon />  Messages
                </p>
              </Link> */} 


              <hr style={{ width: "100%" }} />

              <p className="account_header">ACCOUNT</p>
              <Link href={"/message"} className="inactive link_info">
                {" "}
                <p>
                  <ActiveOrdersIcon /> Active Orders
                </p>
                <i className="badge">8</i>
              </Link>
              <Link href={"/dashboard"} onClick={handleShowNotification} className="inactive link_info">
                {" "}
                <p>
                  <NotificationIcon /> Notifications
                </p>
                <i className="badge">5</i>
              </Link>
              <Link href={"/message"} className="inactive link_info">
                {" "}
                <p>
                  <SettingsAndPrivacyIcon /> Settings and Privacy
                </p>
              </Link>
            </div>
          </div>



          {/* <Accordion allowMultiple>
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
                    <SupportIcon /> Help and Support Center
                  </p>
                </Link>

                <p onClick={onOpen}>
                  <LogoutIcon /> Logout{" "}
                </p>

                <div className="task-work">
                  
                  <p>Get Started with Walcr Taskwalker</p>
                  <NextIcon />
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion> */}

          <div className="info">
            <div className="info_details">
              <div className="image-container">
                <Image
                  src={"/images/profile.svg"}
                  height={35}
                  width={35}
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
            <button><EllipsisIcon /></button>
          </div>
        </div>
      </div>
      <div className="left" onClick={() => setShowNav(!showNav)}></div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          width={"90%"}
          p={10}
          gap={"50px"}
          borderRadius={"32px"}
          zIndex={"30"}
          margin={"50% auto"}
        >
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            gap={"30px"}
          >
            <LogoutIconX />
            <div
              className="text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Text fontSize={"22px"} fontWeight={"700"}>
                Logout
              </Text>
              <Text color={"#8C92AB"} fontSize={"14px"} fontWeight={"400"}>
                {" "}
                Are you sure you want to logout ?
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Button
                border={"1px solid #1a1a1a"}
                background={"transparent"}
                color={"#1a1a1a"}
                width={"120px"}
                size={"lg"}
                mr={3}
                onClick={onClose}
                fontSize={"14px"}
                fontWeight={"700"}
              >
                Cancel
              </Button>
              <Button
                width={"120px"}
                size={"lg"}
                background={"#FB2047"}
                color={"#fff"}
                onClick={handleLogout}
                fontSize={"14px"}
                fontWeight={"700"}
              >
                Log out
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </SideNavContainer>
  );
};

export { SideNavbar };
