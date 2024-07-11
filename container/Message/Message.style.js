import styled from "styled-components";

export const MessageStyle = styled.div`
  padding: 3% ;
height:100vh ;
  //step 1
  .step-one .header,
  .step-two .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step-one h1{
    font-size:18px ;
    font-weight:700 ;
  }

  .body {
    padding-top: 6%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .body .option {
    display: flex;
    gap: 20px;
  }

  .option p {
    font-size: 12px;
    font-weight: 400px;
    background-color: #f4f4f4;
    border-radius: 9px;
    padding: 5px 20px;
    border: 1px solid #f0f2f6;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .option span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    width: 8px;
    height: 8px;
    font-size: 7px;
    border-radius: 100%;
  }

  .message-body {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .message-body .message-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .message-body .message-info .icon-text {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .message-body .message-info .icon {
    width: 60px;
    height: 60px;
    background-color: #f0f2f6;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message-info .text h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .message-info .text p {
    font-size: 14px;
    font-weight: 400;
    color: #8c92ab;
  }

  .message-info .time-count p {
    font-size: 14px;
    font-weight: 400;
    color: #1a1a1a;
  }

  .message-info .time-count .count {
    width: 22px;
    height: 22px;
    background-color: #1a1a1a;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    color: #fff;
    margin-top: 5px;
  }

  //step 2
  .step-two .back-icon-text {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .step-two .icon-text {
    display: flex;
    gap: 10px;
    align-items: flex-end;
  }
  .step-two .icon-text h1 {
    font-size: 16px;
    font-weight: 700;
  }
  .step-two .icon-text p {
    font-size: 12px;
    font-weight: 400;
  }

  .step-two .icons {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .step-two .header .icon {
    width: 50px;
    height: 50px;
    background-color: #f0f2f6;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .step-two .body .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;
  }
  .step-two .body .info-icon {
    width: 105px;
    height: 105px;
    background-color: #f0f2f6;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7% auto;
  }
  .step-two .body .info h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .step-two .body .info p {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    font-size: 9px;
    font-weight: 400;
    color: #8c92ab;
  }

  .step-two .input {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    left:0;
    margin:0 5%;
    /* padding:0 6%; */
    width:95%;
    bottom: 25px;
  }
  .step-two .input span {
    width: 60px;
    height: 60px;
    background-color: #1a1a1a;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
