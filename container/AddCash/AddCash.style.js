import styled from "styled-components";

export const AddCashStyle = styled.div`
  display: grid;
 
  text-align:center ;
  gap:100px;
  /* justify-content:center ; */
  align-items:center ;
  height:100dvh ;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 800px;
     padding: 6%;
  }
  header h1 {
   
  }
  .input {
    text-align: center;
  }
  .input input {
    font-size: 40px;
    font-weight: 700;
    text-align:center ;
    border:none ;
    margin:auto ;

  }
  input:focus{
    border:none ;
  }
  .button-submit:focus{
    background-color:#1a1a1a ;
    margin:auto ;
    width:90% ;
  }
  .numbers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .number-button {
    padding: 10px;
    /* margin: 5px; */
    font-size: 32px;
    font-weight: 900;
  }
`;
