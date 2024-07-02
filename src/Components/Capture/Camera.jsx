import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import { useRouter } from 'next/router';
import { useImage } from './ImageContext';
import { Button } from '@chakra-ui/react';
// import useRoutes from '../../Features/Hooks/Routes/Routes'; 

const Camera = ({ width, height, radius, videoConstraints }) => {
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

    return (
        <div>
            <div>

            </div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={webcamStyle}
                videoConstraints={videoConstraints}
            />
            <div>

            </div>
            
            <Button
            color={"#fff"}
                background={"#1a1a1a"}
                borderRadius={"6px"}
                size={"lg"}
                onClick={capture}>
                Capture photo
            </Button>
        </div>
    );
};

export default Camera 
