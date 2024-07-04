import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "./BottomNav.module.css";
import { Container } from "./BottomNav.style";
import { ActivityIcon, ActivityIconInactive, BigPlusIcon, HomeIconActive, HomeIconInActive, ProfileIcon, ServiceIcon, ServiceIconInactive } from "Src/Assets/index";

const TaskNav = () => {
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
        href={"/earnings"}
        className={
          router.pathname === "/earnings"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
         {router.pathname === "/earnings" ? <ServiceIcon /> : <ServiceIconInactive /> }
        Earnings
      </Link>

      <Link
        href={"/dashboard/activities"}
        className={
          router.pathname === "/dashboard/activities"
            ? `${styled.active}`
            : `${styled.link}`
        }
      >
       {router.pathname === "/dashboard/activities" ? <ActivityIcon /> : <ActivityIconInactive /> }
        
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
};

export { TaskNav };
