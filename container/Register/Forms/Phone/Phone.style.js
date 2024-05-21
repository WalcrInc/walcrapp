import styled from "styled-components";

export const ForgotStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 6% 4% 3% 4%;

  .header h1 {
    font-size: 30px;
    font-weight: 700;
  }
  .header p {
    font-size: 16px;
    font-weight: 400;
    color: #5b6178;
  }

  form {
    display:flex ;
    flex-direction: column;
    gap: 40px;
  }
  button:focus{
   background: black;
  }

`;
