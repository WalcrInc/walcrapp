import React, { useState } from 'react'

const ShowPassword = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
      setShow(!show);
    };
  return {show, handleShow}
}

export default ShowPassword