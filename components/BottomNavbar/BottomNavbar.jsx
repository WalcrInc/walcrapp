import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "./BottomNav.module.css";
import { Container } from "./BottomNav.style";
import { ActivityIcon, ActivityIconInactive, BigPlusIcon, HomeIconActive, HomeIconInActive, ProfileIcon, ServiceIcon, ServiceIconInactive } from "@/assets";

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
        {router.pathname === "/dashboard" ? <HomeIconActive /> : <HomeIconInActive /> }
       {/* {getIcon("/dashboard",, )} */}
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
         {router.pathname === "/services" ? <ServiceIcon /> : <ServiceIconInactive /> }
        Services
      </Link>
      {/* <Link
        href={"/dashboard/services"}
        // className={
        //   router.pathname === "/dashboard/services"
        //     ? `${styled.active}`
        //     : `${styled.link}`
        // }
      >
        <BigPlusIcon/>
      </Link> */}
      <Link
        href={"/dashboard/activities"}
        className={
          router.pathname === "/dashboard/activities"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
       {router.pathname === "/dashboard/activities" ? <ActivityIcon /> : <ActivityIconInactive /> }
        
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
