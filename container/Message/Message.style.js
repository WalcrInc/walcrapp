import styled from "styled-components";

export const MessageStyle = styled.div`
  padding: 0px 3% ;
  height:100vh ;
  //step 1
  .step-one .header,
  .step-two .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step-one {
    // overflow-x: hidden;
  }
  .step-one .header span {
    margin-left: -8px;
  }

  .step-one h1{
    font-size:18px ;
    font-weight:700 ;
  }

  .active-messages{
    position: relative;
    margin-right: 2px;
  }

  .active-messages > i {
    position: absolute;
    bottom: -2px;
    right: -2px;
  }

  .body {
    padding: 0px 0px 3rem;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100%;
    // overflow: scroll;
  }

  .body .option {
    display: flex;
    gap: 18px;
  }

  .step-one {
    flex-grow: 1;
    overflow: hidden;
  }

  .step-one > .body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .option button {
    font-size: 12px;
    font-weight: 400px;
    background-color: #f4f4f4;
    border-radius: 9px;
    padding: 5px 16px;
    border: 1px solid #f0f2f6;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .option .active {
    background-color: #1a1a1a;
    color: #fff;
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
    flex-grow: 1;
    overflow: scroll;
    padding: 6% 0;
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

  .step-two {
    overflow:scroll;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .step-two .back-icon-text {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .step-two .back-icon-text span {
    margin-left: -8px;
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
    gap: 20px;
    align-items: center;
  }

  .step-two .icons .add-user{
    position: relative;
  }

  .step-two .icons .add-user i{
    position: absolute;
    top: -4px;
    right: -6px;
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

  .step-two .body {
    position: relative;
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
    position: fixed;
    left:0;
    width:100%;
    padding: 0 1rem;
    bottom: 3rem;
  }

  .step-two .input input {
    flex-grow: 1;
    outline: none;
    border-radius: 14px;
    background: var(--white, #FFF);
    padding: 12px;
    box-shadow: 0px 0px 0px 1px #CDD1DC;
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

  .step-two .body {
    flex-grow: 1;
    overflow:scroll;
  }

  .step-two .body .messages {
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-grow: 1;
    justify-content: end;
    margin-bottom: 5rem;
    overflow: scroll;
  }

  .step-two .body .messages .date-holder{
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  .step-two .body .messages .date {
    text-align: center;
    margin: 10px 0;
    color: #888;
    border-radius: 6px;
    background: #F1F1F1;
    padding:2px 16px;
  }

  .step-two .body .messages .message {
    max-width: 70%;
    margin-bottom: 10px;
    padding: 10px 16px;
  }

  .step-two .body .messages .message p {
    margin: 0;
  }

  .step-two .body .messages .message .time {
    font-size: 0.8em;
    color: #888;
    text-align: end;
  }

  .step-two .body .messages .received {
    align-self: flex-end;
    background-color: #333;
    color: white;
    border-radius: 20px 0px 20px 20px;
  }

  .step-two .body .messages .sent {
    align-self: flex-start;
    background-color: #f0f0f0;
    color: black;
    border-radius: 0px 20px 20px 20px;
  }
`;
