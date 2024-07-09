import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 1rem;

  header {
    background: url("/images/home1.png") no-repeat top center;
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

    .overlay {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 112px;
      background: url("/images/overlay.svg")
    }
  }

  .text {
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
    font-size: 3.45rem;
    font-weight: 700;
    line-height: 50px;
  }

  .text p {
    color: #5b6178;
    font-size: 18px;
  }
`;
