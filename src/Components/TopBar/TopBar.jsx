import React from 'react'
import Link from "next/link";
import { BackIcon } from "Src/Assets/index";
import style from "./TopBar.module.css"

const TopBar = ({text, href}) => {
    return (
        <div>
            <div className={style.Topbar}>
                <span className={style.back}>
                    <Link href={href}>
                        <BackIcon />
                    </Link>
                </span>
                <h3>{text}</h3>
            </div>
        </div>
    )
}

const WalcrBar = ({href}) =>{
    return(
        <div className={style.WalcrBar}>
        <div className={style.Topbar}>
            <span className={style.back}>
                <Link href={href}>
                    <BackIcon />
                </Link>
            </span>
        </div>
    </div>
    );
}

export {TopBar, WalcrBar}
