import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5% 4%;
  .header h1 {
    font-size: 30px;
    font-weight: 700;
  }
  .header p {
    font-size: 16px;
    font-weight: 400;
    color: #5b6178;
  }

  .active{
    border-bottom:2px solid #f18341 ;
  }

  .options {
    display: flex;
    gap: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .checkbox {
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 400;
  }
  .span a {
    color: #1a1a1a;
    font-size: 12px;
    text-decoration: underline;
  }

  .or {
    margin: 2%;
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
