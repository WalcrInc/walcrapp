import styled from "styled-components";

export const TaskWorkerStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  .top {
    height: 40dvh;
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

  .bottom {
    /* border:1px solid red ; */
    height: fit-content;
    box-shadow: 0px 10px 30px 3px #05103726;
    border-radius: 40px 40px 0 0;
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 10% 6%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .bottom .box {
    padding: 6%;
    background-color: #f0f2f6;
    border: 1px solid #f0f2f6;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  //step-one
  .back-icon {
    position: absolute;
    top: 10px;
    padding: 6%;
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

  //step-two

  .top .icon-input {
    display: flex;
    gap: 20px;
    align-items: center;
    box-shadow: 0px 11px 20px 0px #0510371a;
    padding: 3%;
    /* margin: 6% ; */
    border-radius: 16px;

    position: relative;
    left: 0px;
    top: 50px;
    width: 90%;
    margin: 6% auto;
  }
  .top .input {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }
  .bottom h1 {
    font-size: 18px;
    font-weight: 700;
  }
  label {
    font-size: 16px;
  }
`;
