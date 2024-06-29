import React from "react";
import { ProfileStyle } from "./Profile.style";
import { EmailIcon, PasswordIcon, PhoneIcon, UserIcon } from "src/Assets/index";
import {
  InputGroup,
  Input,
  InputLeftElement,
  FormLabel,
  FormControl,
  Button,
} from "@chakra-ui/react";
import useFetchData from "@/Features/Hooks/useFetchDataHook/useFetchData";
import { useSelector } from "react-redux";
import Link from "next/link";
import style from './Profile.module.css'

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";

  const { data } = useFetchData({
    url: "https://walcr-backend.onrender.com/auth/user",
    token: accessToken,
  });

  return (
    <ProfileStyle>
      <h1>Profile</h1>
      <div className="info">
        Brandon Joe 2693 Burnside Court, Phoenix, Arizona
      </div>
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <UserIcon />
            </InputLeftElement>
            <Input placeholder="Brandon Joe" isDisabled/>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <EmailIcon />
            </InputLeftElement>
            <Input placeholder="brandonjoe@gmail.com" isDisabled/>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <InputGroup
            disabled
            boxShadow={"0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <PhoneIcon />
            </InputLeftElement>
            <Input placeholder="+1602-376-4821" isDisabled/>
          </InputGroup>
        </FormControl>

      </form>

      <div>
        <p>More settings</p>
        <div>
          <div>
          <Link href={"#"}>
          Saved Address</Link>

          </div>

          <div>
          <Link href={"#"}>
          Password and Security</Link>
          </div>
        </div>
      </div>
    </ProfileStyle>
  );
};

export { Profile };
