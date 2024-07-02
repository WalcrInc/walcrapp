import React from 'react'
import { WalcrBar } from '@/Components/TopBar/TopBar'
import style from './Agreement.module.css'

export const Agreement = () => {

  return (
    <div className={style.Container}>
      <WalcrBar href={"/"} />
    </div>
  )
}
