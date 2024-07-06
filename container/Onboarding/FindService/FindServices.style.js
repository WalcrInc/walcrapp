import styled from "styled-components";

export const FindServicesStyle = styled.div`
  padding: 3rem 6%;
  height: 100dvh;
  overflow: scroll;

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    gap: 30px;
    position: relative;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    gap: 20px;
  }

  .box .sub-box {
    box-shadow: 0px 4px 12px 2px #00000014;
    border-radius: 18px;
    text-align: center;
    padding: 6% 10%;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    margin-bottom: 3rem;
  }

  .others h1 {
    font-size: 22px;
    font-weight: 700;
  }
`;
