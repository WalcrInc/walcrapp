import React from 'react'
import styles from './Nav.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";


const Nav = () => {
    const router = useRouter();
  return (
    <div className={styles.Container}>
      <Link 
      href={"/hours"}
      className={
        router.pathname === "/hours"
          ? `${styles.active}`
          : `${styles.link}`}
          >
            Home
      </Link>

      <Link 
      href={"/tasks"}
      className={
        router.pathname === "/tasks"
          ? `${styles.active}`
          : `${styles.link}`}
          >
            Tasks
      </Link>

      <Link 
      href={"/cancel"}
      className={
        router.pathname === "/cancel"
          ? `${styles.active}`
          : `${styles.link}`}
          >
            Cancel
      </Link>
    </div>
  )
}

export default Nav
