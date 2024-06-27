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
import { EmailIcon, PasswordIcon, PhoneIcon, UserIcon } from "Src/Assets/index";
import useFetchData from "Src/Components/hooks/useFetchDataHook/useFetchData";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";

  const { data } = useFetchData({
    url: "https://walcr-backend.onrender.com/auth/user",
    token: accessToken,
  });

  //   const [userData, setUserData] = ({
  //     name:data?.name,
  //     email:data?.email,
  //     phone_number:data?.phone_number,
  //     password:""

  //   })
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
