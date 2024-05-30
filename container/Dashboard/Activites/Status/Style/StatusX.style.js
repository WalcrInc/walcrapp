import styled from "styled-components";

export const StatusXContainer = styled.div`
  display: grid;
  grid-template-rows:repeat(4, 1fr) ;
  /* gap: 30px; */
  position:relative ;
  height:100dvh ;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header h1 {
    font-size: 18px;
    font-weight: 700;
  }

  .section-1 .a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .a .icon-text {
    display: flex;
    gap: 10px;
  }

  .icon-text .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .icon-text .text h1 {
    font-size: 18px;
    font-weight: 700;
  }

  .icon-text .sub-text {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .sub-text p {
    color: #5b6178;
    font-size: 14px;
    font-weight: 400;
  }
  .sub-text .rating {
    font-size: 14px;
    font-weight: 400;
    background-color: #f0f2f6;
    border-radius: 8px;
    padding: 0 4px;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .icon-text .icon {
    width: 60px;
    height: 60px;
    background-color: #f0f2f6;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .b {
    margin-top: auto;
    background-color: #ffb1191a;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding: 1%;
    border-radius: 3px;
    color: #ffb119;
  }

  .section-2 {
    background-color: #f0f2f680;
    border-radius: 16px;
    padding: 3%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section-2 .delivery-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .section-2 h2 {
    font-size: 18px;
    font-weight: 400;
  }
  .section-2 .address-time {
    display: flex;
    gap: 20px;
  }
  .section-2 .address-time .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .section-2 .address-time .a {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .section-2 .address-time .a p {
    color: #5b6178;
    font-size: 14px;
    font-weight: 400;
  }
`;
