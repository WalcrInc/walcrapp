import styled from "styled-components";

export const OnboardingStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
  }

  .icons {
    margin: auto;
  }

 

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 5%;
  }

  .bottom .text {
    display: flex;
    flex-direction: column;
    gap: 15px;
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
