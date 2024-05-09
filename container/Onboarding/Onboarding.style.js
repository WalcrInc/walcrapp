import styled from "styled-components";

export const OnboardingStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* gap:20px; */
  width: 100%;
  height: 100dvh;

  .header {
    padding: 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
  }

  .step-one,
  .step-two,
  .step-three {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: fit-content;
    margin: auto;
  }

  .icon {
    background: url("/images/person.svg");
    height: 300px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .step-one .text,
  .step-two .text,
  .step-three .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 3% 6%;
  }

  .text h1 {
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
  }
  .text p {
    font-size: 18px;
    font-weight: 400;
    color: #5b6178;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 2%;
    width: 100%;
    left: 0;
  }

  .bottom .body {
    margin-bottom: 20px;
  }

  .indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 6%;
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
