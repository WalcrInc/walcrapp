import { Camera } from '@/Components/Capture/Camera'
import React from 'react'

const Identity = () => {
  const videoConstraints = {
    facingMode: { exact: "environment" }
  };
  return (
    <div>
      
      <Camera height={"300px"} width={"600px"} videoConstraints={videoConstraints} />
      </div>
  )
}

export default Identity
