import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding-bottom: 1rem;

  header {
    background: url("/images/home5.png") no-repeat center center;
    background-size: cover;
    display: flex;
    height: 80%;
    width: 100%;
    position: relative;

    /* .logo {
      position: absolute;
      top: 20px;
      left: 20px;
    } */
    p {
      color: white;
      position: absolute;
      bottom: 100px;
      left: 30px;
      text-align: left;
      font-size: 50px;
      font-weight: 700;
      line-height: 50px;
    }
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    text-align: center;
    padding: 3% 8%;
    position: relative;
    margin-top: -15%;
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: 20px 20px 0 0;
  }

  .text h1 {
    font-size: 3.4rem;
    font-weight: 800;
    line-height: 50px;
  }

  .text p {
    color: #5b6178;
    font-size: 18px;
  }

  .text .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .text .skip {
    cursor: pointer;
    color: #5b6178;
    font-size: 16px;
    margin-top: 15px;
  }

  .text p {
    margin-left: auto;
    font-size: 16px;
    font-weight: 700;
  }

  /* @media (max-width: 768px) {
    header {
      height: 60%;
    }

    .text {
      margin-top: -20%;
    }

    .text h1 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 480px) {
    header {
      height: 50%;
    }

    .text {
      margin-top: -25%;
    }

    .text h1 {
      font-size: 2rem;
    }

    .text p {
      font-size: 16px;
    }
  } */
`;
