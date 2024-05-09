import styled from "styled-components";

export const OnboardingStyle = styled.div`
  display: flex;
  flex-direction:column ;
  

  .text h1 {
    font-size: 50px;
    font-weight: 800;
    line-height: 50px;
  }
  .text p {
    font-size: 18px;
    font-weight: 400;
    color: #5b6178;
  }

  .step-two .text {
    padding:0 6%;
    display:flex ;
    flex-direction:column;
    gap:20px;
  }
  .step-two {
    display:flex ;
    flex-direction:column ;
    position:absolute ;
    top:150px ;
    padding:60%  0;

  }

  .header {
    padding: 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:absolute ;
    top:0 ;
    width:100% ;
    
  }



  .icon {
    margin: auto;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  5%;
    position:absolute ;
    bottom:0% ;
    width:100% ;
  }

  .bottom .text {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
  }

  .indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .page-indicator span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #8c92ab;
    transition: 0.5s ease-in-out;
  }

  .page-indicator span.active {
    background-color: #000;
    width: 30px;
    border-radius: 10px;
  }


  @media screen and (max-width: 500px){
    .step-two {
    top:-150px ;
    padding:5% auto ;
  }
  }
`;
