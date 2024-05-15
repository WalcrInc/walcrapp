import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 6%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .body {
    padding-top: 6%;
  }

  button:focus{
    background-color:#1a1a1a ;
    color:#fff ;
  }
  // sstep 1
  .step-1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align:center ;
  }

 .image{
    margin:auto ;
 }
  .step-1 h1 {
    font-size: 22px;
    font-weight: 700;
  }
  .step-1 p {
    font-size: 16px;
    font-weight: 400;
    color: #5b6178;
  }

  //step 2
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  form label {
    font-size: 16px;
    font-weight: 400;
  }
  button:hover {
    background-color: #1a1a1a;
  }

  .input{
    border:1px solid #CDD1DC ;
    padding:15px ;
    border-radius:6px ;
    color:#1a1a1a ;
    width:100% ;
  }
`;
