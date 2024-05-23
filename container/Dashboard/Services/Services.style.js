import styled from "styled-components";

export const ServicesStyle = styled.div`

  display:flex ;
  flex-direction:column ;
  height:100dvh ;
  overflow:hidden ;
  position:relative ;
  .top {
   height:40dvh ;
    /* border:1px solid red ; */
  }
  .box h2 {
    font-size: 18px;
    font-weight: 700;
  }
  .box p {
    font-size: 16px;
    font-weight: 400;
  }


  .bottom  {
    /* border:1px solid red ; */
    height:fit-content ;
    box-shadow: 0px 10px 30px 3px #05103726;
    border-radius:40px 40px 0 0 ;
    position:absolute ;
    bottom:0px ;
    width:100% ;
    padding:6% ;
    display:flex ;
    flex-direction:column ;
    gap:30px;
 
  }

  .bottom h1{
    font-size: 22px;
    font-weight: 700;
  }

  .bottom .box{
    padding:6% ;
    background-color:#F0F2F6 ;
    border: 1px solid #F0F2F6;
    border-radius:16px ;
    display:flex ;
    flex-direction:column ;
    gap:20px;
  }
`;
