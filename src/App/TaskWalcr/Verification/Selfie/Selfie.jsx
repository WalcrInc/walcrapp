import React from 'react'
// import style from './Selfie.module.css'
import Camera from '@/Components/Capture/Camera'

const Selfie = () => {
  const videoConstraints = {
    facingMode: "user"
  };

  const cameraStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "20px",
  }

  return (
    <div>
      <div>
        <Camera 
        height={'300px'} 
        width={'300px'} 
        radius={'50%'} 
        videoConstraints={videoConstraints}
        text={"Position your face into the frame"}
        style={cameraStyle}
        noticeText={"Make sure your face and shoulder is showing and Please remove any covering from your face"}
        />
      </div>
    </div>
  )
}

export default Selfie
