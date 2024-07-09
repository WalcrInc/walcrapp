import React from 'react'
import Image from 'next/image'
import { CardIcon, LogoutIcon, MessageIcon, NextIcon, NotificationIcon, PrivacyIcon, ProfileIcon, StarIcon, WalletIcon } from '@/Assets/index'
import ProfileImage from '@/Assets/images/profile.svg'
import Radio from '@/Assets/images/Radio.svg'
import styles from "./Profile.module.css"
import Link from 'next/link'

const Profile = () => {
  const links = [
    { path: "/taskwalcr/profile/wallet", icon: <CardIcon />, name: "Wallet" },
    { path: "#", icon: <MessageIcon />, name: "Messages" },
    { path: "#", icon: <MessageIcon />, name: "Documents" },
    { path: "#", icon: <CardIcon />, name: "Reviews" },
    { path: "#", icon: <PrivacyIcon />, name: "Privacy policy", marginTop: "20px" },
    { path: "#", icon: <LogoutIcon />, name: "Logout" },
  ]
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "37%", backgroundColor: "#000", color: "#fff", padding: "15px" }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }}>
          <NotificationIcon />
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
          <Image src={ProfileImage} alt='profile' style={{ background: "gray", borderRadius: "100%", marginRight: "10px" }} />
          <div>
            <p style={{ fontSize: "18px" }}>Ryan Evans</p>
            <div style={{ display: "flex", marginTop: "3px", alignItems: "center" }}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p style={{ marginLeft: "5px" }}>5.0</p>
            </div>
          </div>
        </div>
        <div style={{ width: "95%", borderRadius: "10px", background: "#fff", padding: "20px", margin: "auto", marginTop: "40px", boxShadow: "0 0 4px 0 black", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#000" }}>
          <div>
            <p>
              Tasks completed
            </p>
            <h1 style={{ fontSize: "18px", fontWeight: "700", marginTop: "10px" }}>
              300 tasks in 2 years
            </h1>
          </div>
          <Image src={Radio} style={{}} />
        </div>

      </div>
      <div style={{ height: "73%", marginTop: "60px", padding: "15px" }}>
        {links.map((word, i) => (
          <Link key={i} href={word.path} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", height: "60px", fontSize: "20px", marginTop: word.marginTop }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {word.icon}
              <p style={{ marginLeft: "15px" }}>
                {word.name}
              </p>
            </div>

            <NextIcon />
          </Link>
        ))}
        <div className={styles.TaskWork}>
          <div style={{display:"flex", alignItems:"center", fontSize:"18px"}}>
          <Image src={ProfileImage} style={{width:"40px", marginRight:"10px", background:"gray", borderRadius:"100%"}} />
          <p>Switch to User</p>
          </div>

          <NextIcon />
        </div>
      </div>
    </div>
  )
}

export default Profile