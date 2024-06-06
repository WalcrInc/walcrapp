import styled from "styled-components";

export const AddressStyle = styled.div`
  /* padding: 6%; */
  height:100dvh ;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .body {
    /* padding-top: 6%; */
  }

  button:focus {
    background-color: #1a1a1a;
    color: #fff;
  }
//step 1
.back-icon {
    position: absolute;
    top: 10px;
    padding: 6%;
    z-index:1 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100% ;
    font-size: 18px;
    font-weight: 700;
  }
  .step-1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  .image {
    margin: auto;
  }
  .step-1 h1 {
    font-size: 22px;
    font-weight: 700;
  }
  .step-1 p {
    font-size: 16px;
    font-weight: 400;
    color: #5b6178;
  }

  //step 2
  
  .top {
   height:70dvh ;

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
    height:fit-content ;
    box-shadow: 0px 10px 30px 3px #05103726;
    border-radius:40px 40px 0 0 ;
    position:absolute ;
    bottom:0px ;
    left:0 ;
    width:100% ;
    padding:8% 6%;
    display:flex ;
    flex-direction:column ;
    gap:30px;
   background-color:#fff ;
 
  }

  .bottom h1{
    font-size: 30px;
    font-weight: 700;
  }
  .bottom p{
    font-size: 16px;
    font-weight: 400;
    color:#5B6178 ;
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

  .bottom .icon-input {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .bottom .input {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }

  //step 3

`;
