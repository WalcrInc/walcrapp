import styled from "styled-components";

export const AddCashStyle = styled.div`
  display: flex;
  flex-direction:column ;
  text-align: center;
  /* gap: 80px; */
  align-items: center;
  height: 100vh;
  /* border: 1px solid red; */

  margin: 0;
  padding: 6%;
  header {
    /* height:10px ; */
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width:100% ;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    
  }
  .header h1 {
    font-size: 18px;
    font-weight: 800;
  }

  .card-details {
    box-shadow: 0px 0px 0px 1px #cdd1dc;
    padding: 8px 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto  ;
    width:100% ;

  }
  .cardnumber{
    display:flex ;
    gap:10px;
    align-items:center ;
  }

  .cardnumber p{
    font-size:18px ;
    font-weight:700 ;
    color:#5B6178 ;
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
.numbers button{
  background-color:none ;
}
  .numbers button:focus{
    background-color: none;
  }
  .numbers button:hover{
    background-color: none;
  }
  .numbers button:active{
    background-color: none;
  }

  .number-button {
    padding: 10px;
    /* margin: 5px; */
    font-size: 32px;
    font-weight: 900;
  }

  .text h1 {
    font-size:22px ;
    font-weight:700 ;
  }
  .text p {
    font-size:14px ;
    font-weight:400 ;
    color:#8C92AB ;
  }
`;
