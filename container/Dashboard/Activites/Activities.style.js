import styled from "styled-components";

export const ActivitiesStyle = styled.div`
  padding: 3rem 3% 5.25rem;
  height: 100vh;
  overflow:hidden;

  main {
    display: flex;
    flex-direction: column;
    z-index: 9999;
    gap: 30px;
    height: 100%;
    overflow:hidden;
  }
  header h1 {
    font-size: 34px;
    font-weight: 700;
  }
  .body {
    overflow: scroll;    
  }

  .body::-webkit-scrollbar {
    display: none;
  }
  .body .box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .box .sub-box {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    /* align-items: center; */
  }
  .sub-box .a {
    display: flex;
    gap: 20px;
  }
  .sub-box .icon {
    background-color: #f0f2f6;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sub-box .a .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .a .text h2 {
    font-size: 16px;
    font-weight: 700;
  }
  .a .text h3 {
    font-size: 14px;
    font-weight: 400;
  }
  .a .text p {
    font-size: 12px;
    font-weight: 400;
    color: #5b6178;
  }

  .sub-box .b {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .sub-box .b .icon {
    width: 34px;
    height: 34px;
    background-color: #f0f2f6;
    border-radius: 100%;
    margin-left: auto;
  }

  .b .status {
    background-color: #ffb1191a;
    font-size: 12px;
    font-weight: 400;
    margin-left: auto;
    text-align: left;
    padding: 2% 3%;
    border-radius: 3px;
    color: #ffb119;
  }
  .b .completed {
    background-color: #ffb1191a;
    font-size: 12px;
    font-weight: 400;
    margin-left: auto;
    text-align: left;
    padding: 2% 3%;
    border-radius: 3px;
    color: #2bc128;
  }

  .b p {
    font-size: 12px;
    font-weight: 400;
    color: #5b6178;
  }
`;
