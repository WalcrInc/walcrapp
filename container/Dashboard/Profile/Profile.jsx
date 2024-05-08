import React from "react";
import { ProfileStyle } from "./Profile.style";
import {
  InputGroup,
  Input,
  InputLeftElement,
  FormLabel,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, PasswordIcon, PhoneIcon, UserIcon } from "@/assets";

const Profile = () => {
  return (
    <ProfileStyle>
      <h1>Profile</h1>

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
            <Input placeholder="Name" />
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
            <Input placeholder="Email" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <PhoneIcon />
            </InputLeftElement>
            <Input placeholder="Phone Number" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <PasswordIcon />
            </InputLeftElement>
            <Input placeholder="Password" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            borderRadius={"8px"}
            size={"lg"}
          >
            <InputLeftElement>
              <PasswordIcon />
            </InputLeftElement>
            <Input placeholder="Password" />
          </InputGroup>
        </FormControl>

        <Button
          size={"lg"}
          background={"#1A1A1A"}
          width={"100%"}
          color={"#fff"}
        >
          Update
        </Button>
      </form>
    </ProfileStyle>
  );
};

export { Profile };
