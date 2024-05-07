import styled from "styled-components";

export const InputStyle = styled.div`
  background: #fff;
  box-shadow: 0px 10px 30px 3px #05103726;
  position: absolute;
  /* top:-50px ; */
  bottom: 0;
  width: 100%;
  padding: 5%;
  height: 50dvh;
  border-radius: 32px 32px 0 0;
  display:flex ;
  flex-direction:column ;
  gap:40px;

  .text h1 {
    font-size: 30px;
    font-weight: 700;
  }

  .text p {
    font-size: 16px;
    color: #5b6178;
  }

  form{
    display:flex ;
  flex-direction:column ;
  gap:60px;
  }
`;
