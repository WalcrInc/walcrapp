import styled from "styled-components";

export const OnboardingStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;

  .header {
    padding: 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding-top: 3rem;
  }

  .mainBody {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }

  .step-one,
  .step-two,
  .step-three {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    justify-content: end;
  }

  .icon {
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    margin: 10px;
  }

  .step-one > .icon {
    background: url("/images/around-the-world-animate.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }

  .step-two > .icon {
    background: url("/images/gutter-cleaning-animate.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }

  .step-three > .icon {
    background: url("/images/quality-time-in-nature-animate.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }

  .step-one .text,
  .step-two .text,
  .step-three .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 3%;
  }

  .text h1 {
    font-size: 3.125em;
    font-weight: 800;
    line-height: 1.2em;
  }
  .text p {
    font-size: 1em;
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
    padding: 0 6%;
  }

  .indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 3%;
  }

  .page-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .page-indicator span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #8c92ab;
    transition: 0.5s ease-in-out;
  }

  .page-indicator span.active {
    background-color: #000;
    width: 30px;
    border-radius: 10px;
  }

  .next {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .next span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
