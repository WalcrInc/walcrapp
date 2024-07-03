import React from 'react'
import Image from 'next/image'
import ReviewImg from '@/Assets/images/review.png'
import { Button } from '@chakra-ui/react'

const Review = () => {
  return (
    <div style={{display:"flex", height:"100vh", width:"100vw", justifyContent:"center", padding:"20px", alignItems:"center", flexDirection:"column"}}>
        <Image src={ReviewImg} style={{width:"100px", height:"100px", marginBottom:"10px"}} alt='under review'/>


        <p style={{fontSize:"21px", fontWeight:"700", marginBottom:"8px", textAlign:"center"}}>
        Your application is submitted and is under review
        </p>
        <span>
        You'll be notified with the application status
        </span>

        <Button 
        size={"lg"}
        color={"#fff"}
        background={"#000"}
        style={{width:"96%", position:'absolute', display:"block", margin:"auto", bottom:"20px", right:"10px"}}
        >
            Continue
        </Button>
    </div>
  )
}

export default Review