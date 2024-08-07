import React from "react";
import { ProfileStyle } from "./Profile.style";
import {
  EmailIcon,
  PasswordIcon,
  PhoneIcon,
  UserIcon,
  LockIcon,
  AddressIcon,
  TrashIcon,
  NextIcon,
  EditIcon,
} from "@/assets/index";
import {
  InputGroup,
  Input,
  InputLeftElement,
  FormLabel,
  FormControl,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import useFetchData from "@/features/Hooks/useFetchDataHook/useFetchData";
import { useSelector } from "react-redux";
import Link from "next/link";
import style from "./Profile.module.css";
import Image from "next/image";
import ProfileImage from "@/assets/images/profile.svg";
import { TopBar } from "@/components/TopBar/TopBar";
import useRoutes from "@/features/Hooks/Routes/Routes";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { handleEditEmailRoute, handleEditPhoneRoute } = useRoutes();
  const accessToken = user ? user.data : "";

  const { data } = useFetchData({
    url: "https://walcr-backend.onrender.com/auth/user",
    token: accessToken,
  });

  return (
    <ProfileStyle>
      <TopBar href={"/dashboard"} text={"Edit profile"} />

      <div className={style.User}>
        <Image src={ProfileImage} className={style.Profile} alt="image" />
        <div className={style.UserInfo}>
          <h2>Brandon Joe</h2>
          <p>Brandon Joe 2693 Burnside Court, Phoenix, Arizona</p>
        </div>
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
            <Input placeholder="Brandon Joe" />
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
            <Input placeholder="brandonjoe@gmail.com" />
            <InputRightElement
              style={{ cursor: "pointer" }}
              onClick={handleEditEmailRoute}
            >
              <EditIcon />
            </InputRightElement>
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
            <Input placeholder="+1602-376-4821" />
            <InputRightElement
              style={{ cursor: "pointer" }}
              onClick={handleEditPhoneRoute}
            >
              <EditIcon />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>

      <div className={style.More_settings}>
        <p>More settings</p>
        <div className={style.Sub_setting}>
          <Link href={"#"} className={style.Cont}>
            <div className={style.Link_settings}>
              <AddressIcon />
              <div className={style.Link}>Saved Address</div>
            </div>
            <NextIcon />
          </Link>

          <Link href={"#"} className={style.Cont}>
            <div className={style.Link_settings}>
              <LockIcon />
              <div className={style.Link}>Password and Security</div>
            </div>
            <NextIcon />
          </Link>

          <Link href={"#"} className={style.Cont}>
            <div className={style.Link_settings}>
              <TrashIcon />
              <div className={style.Link}>Deactivate or Delete Account</div>
            </div>
            <NextIcon />
          </Link>
        </div>
      </div>
    </ProfileStyle>
  );
};

export { Profile };
