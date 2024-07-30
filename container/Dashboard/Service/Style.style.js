import styled from "styled-components";

export const ServiceStyle = styled.div`
  
  padding: 0 1rem 2rem;
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
    font-size: 18px;
    font-weight: 700;
  }

  header p {
    color: #1a1a1a;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    margin-top: 1rem;
    line-height: 24px; /* 133.333% */
  }

  header .small_paragraph {
    color: var(--Primary-black, var(--Hyperlink, #1A1A1A));
    /* Body 16px Regular */
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-top: 0px;
  }

  .step_one_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .service_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .search_form{
    border-radius: 6px;
    border: 1px solid #CDD1DC;
    padding: 6px 12px;
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
    line-height: 24px;
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

  .location {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    flex-grow: 1;
  }
  .location h1 {
    color: #1A1A1A;
    font-family: Mulish;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 26.4px;
  }

  .location p {
    font-family: Mulish;
    color:#5B6178;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .location-area {
    display: flex;
    flex-direction: column;
    gap: 55px;
  }

  .options-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
  }

  .option-label > p  {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    margin-top: 2rem;
    text-align: center;
  }

  .option-box {
    padding: 15px;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .radio-input {
    align-self: start;
  }

  .option-box:has(.radio-input:checked) {
    border-radius: 11px;
    border: 1px solid #E9EAED;
  }

  .location-tracking{
    display: flex;
    align-items:center;
    flex-direction: column;
    gap: 2rem;
    flex-grow: 1;
  }

  .location-tracking button {
    margin-top: auto;
  }

  .icon {
    flex: 1;
    background: url("/images/location-tracking.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    margin: 10px;
    width: 100%;
  }

  .location-tracking .details {
    text-align:center;
    margin-bottom: 55px;
    display:flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .location-tracking .details h2 {
    color: #000;
    text-align: center;
    font-family: Mulish;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .location-tracking .details p {
    color: #5B6178;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .modal-heading {
    color: #000;
    text-align: center;
    font-family: Mulish;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
