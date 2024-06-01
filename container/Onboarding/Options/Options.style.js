import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;

  header {
    background: url("/images/home.svg") no-repeat center center;
    background-size: cover;
    display: flex;
    height:70%;
    width: 100%;
    position: relative;

    .logo {
      position: absolute;
      top: 20px;
      left: 20px;
    }
    p {
      color: white;
      position: absolute;
      bottom: 50px;
      left: 20px;
      text-align: left;
      font-size:50px ;
      font-weight:800 ;
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
    position: absolute;
    bottom: 10px;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 30%;
    background-color: white; /* Added background color for better visibility */
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
    /* margin-top:50px ; */
  }

  .text .skip {
    cursor: pointer;
    color: #5b6178;
    font-size: 16px;
    margin-top: 15px;
  }

  .text p{
    margin-left:auto ;
    font-size:16px ;
    font-weight:700 ;
  }
`;