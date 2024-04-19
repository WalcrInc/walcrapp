import styled from "styled-components";

export const OnboardingStyle = styled.div`
  padding: 6% 4%;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly ;
  height:100dvh ;
  .logo {
    margin: auto;
  }

  .icon {
    margin-top: 90px ;
    margin-bottom: 60px ;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .text h1 {
    font-size: 50px;
    font-weight: 500;
    line-height: 50px;
  }
  .text p {
    font-size: 18px;
    font-weight: 400;
    color: #5b6178;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:5px;
  }

  .page-indicator span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #8c92ab;
  }

  .page-indicator span.active {
    background-color: #000;
    width: 30px;
    border-radius: 10px;
  }

  .bottom .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
