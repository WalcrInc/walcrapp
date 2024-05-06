import styled from "styled-components";

export const OnboardingStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;
  .step-one .image {
    background-image: url("/images/dress.png");
    background-size:contain ;
    height: 55vh;
    grid-template-rows: auto 1fr auto;
  }

  .text h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 50px;
  }
  .text p {
    font-size: 18px;
    font-weight: 400;
    color: #5b6178;
  }

  .step-one .text {
    padding: 20px 5%;
  }
  .step-two {
    padding: 5%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    margin: auto;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5%;
  }

  .bottom .text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .page-indicator span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #8c92ab;
    transition: 0.5s ease-in-out;
  }

  .page-indicator span.active {
    background-color: #000;
    width: 30px;
    border-radius: 10px;
  }
`;
