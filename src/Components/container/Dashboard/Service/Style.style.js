import styled from "styled-components";

export const ServiceStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 6%;

  header {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  header h1 {
    font-size: 22px;
    font-weight: 700;
  }
  .big-box {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* margin-bottom: 30px; */
    border-radius: 10px;
  }

  .box {
    background-color: #f0f2f6;
    padding: 6%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 30px; /* Added gap between boxes */
    /* margin-bottom: 40px; */
  }
  .box h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .box p {
    font-size: 16px;
    font-weight: 400;
  }
  .questions{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .questions div{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .questions label{
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
  }
  input[type="radio"]{
accent-color:#1a1a1a ;
  }
`;
