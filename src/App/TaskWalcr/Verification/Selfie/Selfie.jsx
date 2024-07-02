import React from 'react'
import style from './Selfie.module.css'
import Camera from '@/Components/Capture/Camera'

const Selfie = () => {
  const videoConstraints = {
    facingMode: "user"
  };

  return (
    <div>
      <div className={style.Camera}>
        <Camera height={'300px'} width={'300px'} radius={'50%'} videoConstraints={videoConstraints} />
      </div>
    </div>
  )
}

export default Selfie
