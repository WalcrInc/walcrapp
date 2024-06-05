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

  button:focus {
    background-color: #1a1a1a;
    color: #fff;
  }

  .step-1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  .image {
    margin: auto;
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

  .cards {
    position: relative;
    width:100% ;
    height:50%; /* Adjust height as necessary to accommodate card stacking */
    margin:auto ;
    left:0 ;
  }

  .card-1,
  .card-2,
  .card-3,
  .card-4,
  .card-5 {
    position: absolute;
    width: 100%;
    height: 185px;
    border-radius: 20px;
    border: 1px solid grey;
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
    z-index: 5;
    top: 200px;
    background: linear-gradient(135deg, #ff7f50, #ff6347); /* Shades of orange */
  }
  .card-2 {
    z-index: 4;
    top: 150px;
    background: linear-gradient(135deg, #9400d3, #9932cc); /* Shades of violet */
  }
  .card-3 {
    z-index: 3;
    top: 100px;
    background: linear-gradient(135deg, #3cb371, #2e8b57); /* Shades of green */
  }
  .card-4 {
    z-index: 2;
    top: 50px;
    background: linear-gradient(135deg, #4682b4, #4169e1); /* Shades of blue */
  }
  .card-5 {
    z-index: 1;
    top: 0px;
    background: linear-gradient(-125deg, #5dd2ef, #2e9ebe 55%);
  }

  .card-1:hover,
  .card-2:hover,
  .card-3:hover,
  .card-4:hover,
  .card-5:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;
