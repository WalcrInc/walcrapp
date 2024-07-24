import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 16px;
  height:100vh ;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header span {
    margin-left: -8px;
  }

  header h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .body {
    padding-top: 6%;
  }

  button:focus {
    background-color: #1a1a1a;
    color: #fff;
  }
//step 1
  .step-1 {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    align-items: center;
  }

  .image {
    margin: auto;
  }
  .step-1 h1 {
    font-size:2rem;
    font-weight: 700;
  }

  .step-1 p {
   color: #5B6178;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }

  //step 2
  .container{
    display:flex;
    flex-direction:column;
    gap:20px;
    border:1px solid red ;
  }
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

  .input {
    border: 1px solid #cdd1dc;
    padding: 18px 10px;
    border-radius: 6px;
    color: #1a1a1a;
    width: 103%;
    font-size: 18px;
  }

  .card{
    width:100% ;
    text-align:center;
  }
  .card p{
    color:#5B6178;
    margin-bottom:10px ;
    text-align:left;
  }
  .card span{
    font-size:14px ;
    
  }
  .card-details {
    box-shadow: 0px 0px 0px 1px #cdd1dc;
    padding: 8px 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:30px ;
  }

  .cardnumber{
    display:flex ;
    gap:10px;
    align-items:center ;
  }

  //step 3
  .cards {
    position: relative;
    width:100% ;
    height:50%; /* Adjust height as necessary to accommodate card stacking */
    margin:auto ;
    left:0 ;
  }

  .card-1,
  .card-2,
  .card-3 {
    position: absolute;
    // width: 100%;
    // max-width: 300px;
    height: 185px;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column; /* Updated for vertical layout */
    justify-content: space-between;
    padding: 20px; /* Added padding for spacing */
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    left:0 ;
  }

  .card-1 {
    z-index: 3;
    top: 200px;
    left: 40px;
    width: calc(100% - 35px);
  }
  .card-2 {
    z-index: 2;
    top: 150px;
    left: 20px;
    width: calc(100% - 40px);
  }
  .card-3 {
    z-index: 1;
    top: 100px;
    width: calc(100% - 45px);
  }

  .add-new{
    display:flex ;
    justify-content:center ;
    gap:10px;
    align-items:center ;
  }
`;
