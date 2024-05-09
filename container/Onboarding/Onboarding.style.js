import styled from "styled-components";

export const OnboardingStyle = styled.div`
  display: flex;
  flex-direction:column ;
  width:100% ;
  height:100% ;
  

  .text h1 {
    font-size: 40px;
    font-weight: 800;
  }
  .text p {
    font-size: 16px;
    font-weight: 400;
    color: #5b6178;
  }

  .step-two .text {
    padding:0 6%;
    display:flex ;
    flex-direction:column;
    gap:10px;
  }
  .step-two {
    display:flex ;
    flex-direction:column ;
    gap:10px;
   position:fixed ;
  margin:auto ;
  top:20% ;

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
  }

  .page-indicator span.active {
    background-color: #000;
    width: 30px;
    border-radius: 10px;
  }


  
`;
