import React from 'react'
import style from './Selfie.module.css'
import {Camera} from '@/Components/Capture/Camera'

const Selfie = () => {

  return (
    <div>
      <div className={style.Camera}>
        <Camera height={'300px'} width={'300px'} radius={'50%'} />
      </div>
    </div>
  )
}

export default Selfie
