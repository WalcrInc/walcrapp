import React from 'react';
import { useImage } from './ImageContext';

const Confirm = () => {
  const { imageSrc } = useImage();

  if (!imageSrc) {
    return <div>No image captured.</div>;
  }

  return (
    <div>
      <h1>Confirm Your Photo</h1>
      <img src={imageSrc} alt="Captured" style={{ width: '400px', height: '200px' }} />
    </div>
  );
};

export default Confirm;
