// components/UpdateBanner.js
import React from 'react';

const UpdateBanner = ({ onUpdate }) => (
  <div style={{
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    zIndex: 1000
  }}>
    A new version is available!
    <button 
      onClick={onUpdate}
      style={{
        marginLeft: '10px',
        padding: '5px 10px',
        backgroundColor: 'white',
        color: '#4CAF50',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
      }}
    >
      Update now
    </button>
  </div>
);

export default UpdateBanner;