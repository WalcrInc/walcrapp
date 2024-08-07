import styled from "styled-components";

export const FindServicesStyle = styled.div`
  padding: 1rem 0rem 2re,;
  height: 100vh;
  overflow: scroll;

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    gap: 18px;
    position: relative;
    padding: 0 1rem;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  header span {
    margin-left:-8px;
  }

  .header_text{
    display: flex;
    flex-direction: column;
    gap:10px;
  }

  header h1 {
    font-size: 22px;
    font-weight: 700;
  }

  header p {
    font-size: 18px;
    font-weight: 400;
  }
  .body .box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .box .sub-box {
    box-shadow: 0px 4px 12px 2px #00000014;
    border-radius: 18px;
    text-align: center;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .others-sub-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 18px;
    border: 1px solid #d9d9d9;
    background: var(--Gradient, #fff);
    padding: 1.5rem;
    height: 171px;
  }

  .sub-box span {
    margin: auto;
  }

  .service-chosen {
    border: 1px solid #1a1a1a;
  }

  .sub-box h1 {
    font-size: 18px;
    font-weight: 800;
  }
  .sub-box p {
    font-size: 14px;
    font-weight: 400;
  }

  .others {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 2rem;
  }

  .others h1 {
    font-size: 22px;
    font-weight: 700;
  }

  .others input {
    display: flex;
    width: 100%;
    height: 48px;
    padding: 8px 11px;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 0px 0px 1px #cdd1dc;
    color: #000;
  }

  .others input:focus {
    outline: 1px solid blue;
  }
`;
