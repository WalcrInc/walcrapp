import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  height: 100%;
  overflow: scroll;

  /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */


  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header span {
    margin-left:-8px;
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
  .c {
    margin-top: auto;
    background-color: #ffb1191a;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding: 1%;
    border-radius: 3px;
    color: #2bc128;
  }

  .d {
    margin-top: auto;
    border-radius: 3px;
    background: rgba(255, 177, 25, 0.10);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding: 1%;
    color: #FFB119;
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
    gap: 28px;
  }
  .delivery-info h2 {
    /* Body 16px Regular */
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  .section-2 .address-time{
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .section-2 .address-time .address-info {
    display: flex;
    flex-direction: column;
    gap: 28px;
    flex: 1;
  }

    .section-2 .address-time .payment-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }

  .section-2 .address-time .address-info .a {
    width: 100%;
    flex:1;
    display: flex;
    justify-content: space-between;
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

  .wallet {
    display: flex;
    justify-content: space-between;
  }

  .wallet h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    /* Body 16px Regular */
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  .wallet p {
    font-size: 18px;
    font-weight: 700;
  }
`;
