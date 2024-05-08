import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "./BottomNav.module.css";
import { Container } from "./BottomNav.style";
import { ActivityIcon, HomeIcon, ProfileIcon, ServiceIcon } from "@/assets";

const BottomNavbar = () => {
  const router = useRouter();
  return (
    <Container>
      <Link
        href={"/dashboard"}
        className={
          router.pathname === "/dashboard"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
        <HomeIcon/>
        Home
      </Link>
      <Link
        href={"/dashboard/services"}
        className={
          router.pathname === "/dashboard/services"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
        <ServiceIcon/>
        Services
      </Link>
      <Link
        href={"/dashboard/activities"}
        className={
          router.pathname === "/dashboard/activities"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
        <ActivityIcon/>
        Activity
      </Link>
      <Link
        href={"/dashboard/profile"}
        className={
          router.pathname === "/dashbaord/profile"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
        <ProfileIcon/>
        Profile
      </Link>
    </Container>
  );
};

export { BottomNavbar };
