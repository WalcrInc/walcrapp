import styled from "styled-components";

export const HomeStyle = styled.div`
  .header {
    padding: 3rem 6%;
    height: 250px;
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: #fff;
    border-radius: 0 0 32px 32px;
  }
  .header .icon {
    display: flex;
    justify-content: space-between;
  }

  .header .text h1 {
    font-size: 24px;
  }
  .header .text h1 span {
    font-weight: 800;
    font-size: 24px;
  }
  .header .text p {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 15px;
  }

  .wallet-balance {
    background: #f7f7f7;
    position: relative;
    border-radius: 16px;
    height: 100px;
    padding: 7% 5%;
    width: 90%;
    left: 0;
    margin: auto;
    top: -60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wallet-balance .text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 31px 0;
  }
  .wallet-balance .text p {
    font-size: 14px;
    font-weight: 400;
  }
  .wallet-balance .text h1 {
    font-size: 34px;
    font-weight: 700;
  }

  .quick-actions {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 6%;
    position: relative;
    top: -20px;
  }

  .quick-actions h1 {
    font-size: 18px;
    font-weight: 800;
  }

  .options {
    display: flex;
    /* justify-content:space-between ; */
    align-items: center;
    gap: 25px;
  }

  .option {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 5% 2%;
    border: 1px solid #f0f2f6;
    width: 100%;
    border-radius: 16px;
  }

  .option h1 {
    font-size: 12px;
  }
  .option p {
    font-size: 10px;
    color: #5b6178;
  }
  .option span {
    margin-left: auto;
  }
`;
