import React from 'react'
import style from "./Verification.module.css"
import Link from 'next/link'
import { LinkIconGrey } from '@/Assets'

const Verification = () => {
    const Methods = [
        {href:"/taskwalcr/selfie", title:"A Selfie", text: "Upload a photo of yourself"},
        {href:"/taskwalcr/identity", title:"Identity Card", text: "Upload your social security card or passport card"},
        {href:"/taskwalcr/liscense", title:"Driver's License", text: "Upload a valid driver’s license"},
        {href:"/taskwalcr/certificate", title:"Disclosure Certificate", text: "Upload basic, standard and enhanced disclosure certificate"},
    ]

    return (
        <div className={style.Container}>
            <div className={style.info}>
                <h2>Welcome, Joe</h2>
                <p>
                    Here are the documents you need to provide to apply for Walcr Taskwalker
                </p>
            </div>

            <div className={style.Methods}>
                {Methods.map((met, i) => (
                    <Link href={met.href} key={i} className={style.links}>
                        <div>
                            <h3>{met.title}</h3>
                            <p>{met.text}</p>
                        </div>

                    <LinkIconGrey />
                    </Link>
                ))
                }
            </div>

        </div>
    )
}

export default Verification
