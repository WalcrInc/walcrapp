import styled from "styled-components";

export const HelpStyle = styled.div`
  padding: 3% 6%;
  overflow: scroll;
  //step 1
  .step-one .header,
  .step-two .header,
  .step-three .header,
  .step-four .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step-one h1,
  .step-two h1,
  .step-three h1 {
    font-size: 18px;
    font-weight: 700;
  }

  .body {
    padding-top: 6%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .body .faq .header,
  .body .topic .header {
    display: flex;
    justify-content: space-between;
  }

  .faq .header h1,
  .topic .header h1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .faq .body {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap:10px;
  }
  .faq .body .box-1 {
    background: linear-gradient(
      180deg,
      #ffcb6b 0%,
      rgba(61, 139, 255, 0.51) 100%
    );
    height: 226px;
    border-radius: 16px;
    padding: 6%;
    
  }
  .faq .body .box-2 {
    background: linear-gradient(180deg, #9491e2 0%, #aff2d8 100%);
    height: 226px;
    padding: 6%;
    border-radius: 16px;
  }

  .box-1,
  .box-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
  }

  .box-1 h2,
  .box-2 h2 {
    font-size: 16px;
    font-weight: 700;
  }
  .box-1 p,
  .box-2 p {
    font-size: 14px;
    font-weight: 400;
  }

  .topic .body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .topic .body .box {
    display: flex;
    gap: 20px;
  }

  .box span {
    background: #d9d9d9;
    width: 47px;
    height: 41px;
    border-radius: 4px;
  }
  .box p {
    font-size: 14px;
    font-weight: 700;
  }

  .body .bottom-fixed {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%; /* Adjust width to fit your design */
    max-width: 800px; /* Optional: set a max-width for better responsiveness */
    background-color: #fff;
    border: 1px solid #f2f2f2;
    padding: 3%;
    box-shadow: 0px 11px 20px 0px #0510371a;
  }

  .bottom-fixed .text-icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  //step 2
  .step-two .image {
    margin: auto;
  }

  .step-two .body .text h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  .step-two .body .help-shorcut {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* border:1px solid red ; */
  }

  .help-shorcut .help {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .help-shorcut .help h3 {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
  }

  //step 3
  .step-three .icon {
    margin: auto;
    width:261px ;
    height:261px ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:#F0F2F6 ;
    border-radius:100% ;
  }

  .step-three .text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  .step-three .body .text h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .step-three .body .text p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom:20px ;
  }
  .step-three .body .text h2 {
    font-size: 18px;
    font-weight: 700;
    
  }

  .step-three .input {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 90%; /* Adjust width to fit your design */
    max-width: 800px; /* Optional: set a max-width for better responsiveness */
    bottom: 25px;
  }
  .step-three .input span {
    width: 60px;
    height: 60px;
    background-color: #1a1a1a;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
`;
