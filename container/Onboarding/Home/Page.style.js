import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height of the viewport */

  header {
    background: url("/images/home.svg") no-repeat center center;
    background-size: cover;
    flex: 2; /* Take up two-thirds of the container height */
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;

    .logo {
      position: absolute;
      top: 0;
      left: 0;
      margin: 20px; /* Adjust as needed for spacing */
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 112px;
      background: url("/images/overlay.svg") no-repeat center center;
    }
  }

  .text {
    flex: 1; /* Take up the other third of the container height */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
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
