import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AddIconThin } from "@/assets";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 27px;
  background: #9f9f9f33;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  overflow: scroll;
  // background: blue;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background-color: #b9b9b933;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const AddThumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  border: 1px dashed #b9b9b9;
`;

const ThumbnailImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TipsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 20px;
`;

const TipItem = styled.li`
  margin-bottom: 5px;
`;

const StepFour = ({ handleNext }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && images.length < 5) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages([...images, e.target.result]);
        if (!selectedImage) setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (images.length >= 2) {
      handleNext();
    } else {
      document.getElementById("image-upload").click();
    }
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);

    // If the removed image was the selected one, or if it was the last image
    if (selectedImage === images[index] || newImages.length === 0) {
      setSelectedImage(newImages[0] || null);
    }
  };

  useEffect(() => {
    if (images.length > 0 && !images.includes(selectedImage)) {
      setSelectedImage(images[0]);
    } else if (images.length === 0) {
      setSelectedImage(null);
    }
  }, [images, selectedImage]);

  console.log({ selectedImage: selectedImage });

  return (
    <PageWrapper>
      <ImagePreview>
        {selectedImage ? (
          <Image src={selectedImage} alt="Selected task" />
        ) : (
          <p></p>
        )}
      </ImagePreview>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>
          <span style={{ color: "#f00" }}>*</span> Add at least 2 images
        </p>
        <p>{`${images.length}/5`}</p>
      </div>
      <ThumbnailContainer>
        {images.map((img, index) => (
          <Thumbnail key={index} onClick={() => setSelectedImage(img)}>
            <ThumbnailImage src={img} alt={`Thumbnail ${index + 1}`} />
            <RemoveButton onClick={() => removeImage(index)}>✕</RemoveButton>
          </Thumbnail>
        ))}
        {images.length < 5 && (
          <AddThumbnail as="label" htmlFor="image-upload">
            <AddIconThin />
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </AddThumbnail>
        )}
      </ThumbnailContainer>

      <TipsList>
        <TipItem>• Capture the task from different angles.</TipItem>
        <TipItem>• Ensure good lighting.</TipItem>
        <TipItem>• Maintain a clear focus.</TipItem>
      </TipsList>

      <button className="black-button" onClick={handleButtonClick}>
        {images.length === 0
          ? "Capture"
          : images.length < 2
          ? "Add at least 2 images"
          : "Continue"}
      </button>
    </PageWrapper>
  );
};

export default StepFour;
