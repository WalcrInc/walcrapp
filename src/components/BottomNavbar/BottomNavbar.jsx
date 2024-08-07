import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "./BottomNav.module.css";
import { Container } from "./BottomNav.style";
import {
  ActivityIcon,
  ActivityIconInactive,
  BigPlusIcon,
  HomeIconActive,
  HomeIconInActive,
  ProfileIcon,
  ServiceIcon,
  ServiceIconInactive,
} from "@/assets/index";

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
        {router.pathname === "/dashboard" ? (
          <HomeIconActive />
        ) : (
          <HomeIconInActive />
        )}
        Home
      </Link>
      <Link
        href={"/services"}
        className={
          router.pathname === "/services"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
        {router.pathname === "/services" ? (
          <ServiceIcon />
        ) : (
          <ServiceIconInactive />
        )}
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
        {router.pathname === "/dashboard/activities" ? (
          <ActivityIcon />
        ) : (
          <ActivityIconInactive />
        )}
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
        <ProfileIcon />
        Profile
      </Link>
    </Container>
  );
};

const BottomNavBarTwo = () =>{
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
        {router.pathname === "/dashboard" ? <HomeIconActive /> : <HomeIconInActive /> }
        Home
      </Link>
      <Link
        href={"#"}
        className={
          router.pathname === "#"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
         {router.pathname === "#" ? <ServiceIcon /> : <ServiceIconInactive /> }
        Earnings
      </Link>
      <Link
        href={"#"}
        className={
          router.pathname === "#"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
       {router.pathname === "#" ? <ActivityIcon /> : <ActivityIconInactive /> }
        
        Tasks
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
}

export { BottomNavbar, BottomNavBarTwo };
