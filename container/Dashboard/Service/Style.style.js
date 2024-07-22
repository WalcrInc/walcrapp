import styled from "styled-components";

export const ServiceStyle = styled.div`
  
  padding: 0 1rem 3rem;
  height: 100vh;
  
  /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
  main::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  
  main {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 30px;
    overflow: scroll;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  header span {
    margin-left: -8px;
  }

  header h1 {
    font-size: 22px;
    font-weight: 700;
  }

  .search_form{
    border-radius: 6px;
    border: 1px solid #CDD1DC;
    /* Borders/Text Input/Field Border */
    box-shadow: 0px 0px 0px 1px #CDD1DC;
    padding: 4px 12px;
    display:flex;
    align-items: center;
    gap:10px;
    margin-bottom: 26px;
  }

  .search_form input {
    outline:none;
    background: transparent;
  }

  .search_form input::placeholder {
    color: var(--black-30, #C1C7DE);
    font-family: Alata;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 141.176% */
  }

  .big-box {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* margin-bottom: 30px; */
    border-radius: 10px;
  }

  .box {
    // background-color: #f0f2f6;
    border-radius: 16px;
    border: 1px solid var(--black-10, #F0F2F6);
    padding: 6%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px; /* Added gap between boxes */
    /* margin-bottom: 40px; */
  }
  .box h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .box p {
    font-size: 16px;
    font-weight: 400;
  }
  .questions{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .questions div{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .questions label{
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
  }
  input[type="radio"]{
accent-color:#1a1a1a ;
  }
`;
