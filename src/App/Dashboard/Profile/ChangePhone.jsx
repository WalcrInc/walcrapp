import React from 'react'
import { TopBar } from '@/Components/TopBar/TopBar'
import { Number } from '@/Components/Input/Number'
import GetCode from '@/Components/Input/GetCode'
import Style from './Style.module.css'

const changePhone = () => {
    return (
        <div className={Style.Container}>
            <TopBar href={"/dashboard/profile"} text={"Change Number"} />
            <h1>New Phone Number Verification</h1>
            <div className={Style.Input}>
            <Number />
            </div>
            <div className={Style.Input}>
            <GetCode text={"New Phone"} />
            </div>

            <div className={Style.Security}>

                <h1>Security Verification</h1>
                <div className={Style.Input}>
                    <GetCode text={"Phone"} notice={"Enter the 6 digit code sent to your number"} />
                </div>
                <div className={Style.Input}>
                    <GetCode text={"E-mail"} notice={"Enter the 6 digit code sent to your email"} />
                </div>

                <p className={Style.text}>Security verification unavailable?</p>
            </div>

            
        </div>
    )
}

export default changePhone
