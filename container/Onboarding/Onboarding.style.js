import styled from "styled-components";

export const OnboardingStyle = styled.div`
  padding: 0px 5%;
  display: grid;
  grid-template-rows: repeat(3, auto); /* Adjust as needed */
  row-gap: 70px;
  height: 100dvh;
  .logo {
    margin: 10px auto;
  }

  .icon {
    /* margin: 120px auto; */
  }

  .icons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
.bottom{
  display:flex ;
  flex-direction:column ;
  gap:20px;
}
  .indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:20px;
  }

  .page-indicator span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #8c92ab;
    transition:0.5s ease-in-out ;
    
  }

  .page-indicator span.active {
    background-color: #000;
    width: 30px;
    border-radius: 10px;
  }

  .bottom .text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .text h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 50px;
  }
  .text p {
    font-size: 18px;
    font-weight: 400;
    color: #5b6178;
  }
`;
