import styled from "styled-components";

export const TaskwalkerStyle = styled.div`
  padding: 6%;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  .section-1 .box {
    display: flex;
    justify-content: space-between;
  }
  .box .sub-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .sub-box p {
    font-size: 14px;
    font-weight: 400;
  }
  .sub-box span {
    color: #f18341;
    font-size: 18px;
    font-weight: 800;
  }

  .section-2 .box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
  }
  .section-2 .box .sub-box {
    display: flex !important;
    flex-direction: row;
    gap: 20px;
    /* border: 1px solid red; */
    text-align: left;
  }
  .section-2 .box .sub-box .text {
    display: flex !important;
    flex-direction: column;
    gap: 5px;
  }
  .text h1 {
    font-size: 22px;
    font-weight: 700;
    line-height:26.4px;
  }
  .text p {
    font-size: 14px;
    font-weight: 400;
  }
`;
