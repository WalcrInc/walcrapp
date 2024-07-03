import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import { useRouter } from 'next/router';
import { useImage } from './ImageContext';
import { Button } from '@chakra-ui/react';
// import useRoutes from '../../Features/Hooks/Routes/Routes'; 

const Camera = ({ width, height, radius, videoConstraints, heading, text, noticeText, style }) => {
    const webcamRef = useRef(null);
    const { setImageSrc } = useImage();
    const router = useRouter();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
        router.push('/taskwalcr/preview'); // Adjust the path as needed
    }, [webcamRef, setImageSrc, router]);

    const webcamStyle = {
        width: width,
        height: height,
        border: '2px dashed #000',
        borderRadius: radius,
        objectFit: 'cover',
    };
    const buttonStyle = {
        width: "100%",
        // marginLeft: "15px",
    }

    return (
        <div style={style}>
            <div>
                <h1 style={{fontSize: "24px", fontWeight:"700", marginBottom:"25px"}}>{heading}</h1>
                <p>{text}</p>
            </div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={webcamStyle}
                videoConstraints={videoConstraints}
            />
            <div>
                <p>
                    {noticeText}
                </p>
            </div>
            
            <Button
            color={"#fff"}
                background={"#1a1a1a"}
                borderRadius={"6px"}
                size={"lg"}
                style={buttonStyle}
                onClick={capture}>
                Take photo
            </Button>
        </div>
    );
};

export default Camera 
