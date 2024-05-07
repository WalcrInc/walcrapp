import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "./BottomNav.module.css";
import { Container } from "./BottomNav.style";

const BottomNavbar = () => {
  const router = useRouter();
  return (
    <Container>
      <Link
        href={"/"}
        className={
          router.pathname === "/" ? `${styled.active}` : `${styled.link}`

        }
      >
        Home
      </Link>
      <Link
        href={"/"}
        className={
          router.pathname === "/" ? `${styled.active}` : `${styled.link}`

        }
      >
        Home
      </Link>
      <Link
        href={"/"}
        className={
          router.pathname === "/" ? `${styled.active}` : `${styled.link}`

        }
      >
        Home
      </Link>
      <Link
        href={"/"}
        className={
          router.pathname === "/" ? `${styled.active}` : `${styled.link}`

        }
      >
        Home
      </Link>
    </Container>
  );
};

export { BottomNavbar };
