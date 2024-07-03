import React from 'react';
import { useImage } from './ImageContext';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useRoutes from '@/Features/Hooks/Routes/Routes';

const Confirm = () => {
  const { imageSrc } = useImage();
  const router = useRouter();
  const {handleReviewRoute} = useRoutes();

  if (!imageSrc) {
    return <div>No image captured.</div>;
  }
  const Preview = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "20px",
  }
  const buttonStyle = {
    width:"48%",
    border: "1px solid #000",
  }
  const buttonStyle2 = {
    width:"48%",
  }
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }

  const handleBack = () =>{
    router.back();
  };

  return (
    <div style={Preview}>
      <div style={{width: "100%",}}>
      <h1 style={{fontSize:"24px", fontWeight: "800" }}>Are you satisfied with the photo?</h1>
      </div>
      <img src={imageSrc} alt="Captured" style={{ width: '400px', height: '300px', }} />
      <p>
      Submit this image if you think it’s okay or tap on retake to capture another one
      </p>

      <div style={divStyle}>
        <Button
        background={"#fff"}
        color={"#000"}
        size={"lg"}
        style={buttonStyle}
        onClick={handleBack}
        >
          Retake
        </Button>
        <Button
        background={"#000"}
        color={"#fff"}
        style={buttonStyle2}
        onClick={handleReviewRoute}
        size={"lg"}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
