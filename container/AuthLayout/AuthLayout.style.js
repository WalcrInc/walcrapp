import styled from "styled-components";

export const AuthStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 6% 4% 3% 4%;
  height:120dvh;
  input:focus{
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }
  button:focus{
   background: grey;
  }

  .header{
    display:flex ;
    flex-direction:column ;
    gap:5px;
  }
  .header h1 {
    font-size: 30px;
    font-weight: 700;
  }
  .header p {
    font-size: 16px;
    font-weight: 400;
    color: #5b6178;
  }
.custom-phone-input{
    box-shadow:0 0 0 1px #CDD1DC ;
    border:none ;
}
  .active {
    border-bottom: 2px solid #f18341;
    transition: 0.5s ease-in-out;
  }
  .error{
    color:#FB2047 ;
    font-size:12px ;
    display:flex ;
    gap:2px;
    align-items:center ;
    margin-top:10px ;
  }
 .options {
    display: flex;
    gap: 20px;
  }

  /* .option {
    color: #5b6178;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    position: relative;
  }

  .active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #f18341;
    
  } */

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .checkbox {
    display:flex ;
    align-items:center ;
    gap:5px;
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 400;
  }
  .checkbox span {
    color: #f18341;
  }
  .span a {
    color: #1a1a1a;
    font-size: 16px;
    text-decoration: underline;
  }

  .or {
    text-align: center;
    position: relative;
  }
  .or::before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    left: 0;
    top: 50%;
    position: absolute;
  }
  .or::after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    right: 0;
    top: 50%;
    position: absolute;
  }
`;
