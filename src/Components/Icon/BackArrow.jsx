import React from 'react';


const BackArrow = ({handleBack}) => {

  return (
    <button onClick={handleBack} aria-label="Go back" style={styles.button}>
     Back
    </button>
  );
};

const styles = {
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    left: '3px',
    top: '18px',
  },
};

export default BackArrow;
