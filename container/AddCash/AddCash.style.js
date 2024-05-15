import styled from "styled-components";

export const AddCashStyle = styled.div`
  display: grid;
  text-align: center;
  /* gap: 80px; */
  align-items: center;
  height: 100dvh;
  border:1px solid red ;
  padding:0 ;
  margin:0 ;
  header{
    /* height:10px ; */
    border:1px solid red ;
    display:flex ;
    flex-direction:column ;
    justify-content:flex-start ;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 6%;
  }
  .header h1 {
    font-size: 18px;
    font-weight: 800;
  }
  .input {
    text-align: center;
  }
  .input input {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    border: none;
    margin: auto;
  }
  button,
  input:focus {
    /* border: 1px solid red; */
    outline: none;
  }
  .number-body {
    display: flex;
    flex-direction: column;
    gap: 50px;
    /* justify-content:flex-end ; */
  }
  .button-submit:focus {
    background-color: #1a1a1a;
    margin: auto;
    width: 90%;
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
