import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;

  header {
    background: url("/images/home.svg") no-repeat center center;
    background-size: cover;
    flex: 2;
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;

    .logo {
      position: absolute;
      top: 0;
      left: 0;
      margin: 20px;
    }
  }

  .text {
    position: relative;
    background-color: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    padding: 3%;
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
`;