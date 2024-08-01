import styled from "styled-components";

export const ServiceStyle = styled.div`
  
  padding: 3rem 1rem 2rem;
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

  .step_five_info {
    padding: 2rem 1rem;
    border-radius: 40px 40px 0px 0px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    box-shadow: 0px 18px 34px 0px rgba(5, 16, 55, 0.30);
  }

  .step_five_info h2{
    color: var(--Primary-black, #1A1A1A);
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 120% */
  }

  .step_five_info .addresses {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .step_five_info .addresses > div {
    display: flex;
    gap: 12px;
    align-items:center;
  }

  .step_five_info .input {
    color: var(--black-70, #5B6178);
    /* Body 16px Regular */
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  .step_five_info .addresses > div > input {
    flex-grow: 1;
    border-radius: 10px;
    padding: 10px 20px;
    border: 1px solid var(--Primary-black, #1A1A1A);
  }

  .step_five_info .addresses > .other_address > input{
    border-radius: 10px;
    border: 1px solid #D9DDEA;
  }

  .available_walkers_map {
    width: 100%;
    position: absolute;
     top: 0;
    left: 0;
    z-index: -1;
    max-height: 100vh;
    width: 100%;
  }

  .available_taskwalker {
    position: absolute;
    top: calc(20% + 112px);
    background: #fff;
    // background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
    padding: 1rem;
    width: 100%;
    margin-left: -1rem;
    height: calc(100vh - 20% - 112px);
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }

   .overlay {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 112px;
    background: url("/images/overlay.svg");
  }

  .available_taskwalker h2 {
    color: var(--Primary-black, #1A1A1A);
    font-family: Mulish;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 96% */
  }

  .walker_specs {
    display: flex;
    align-items:center;
    justify-content: space-between;
  }

  .walker_info {
    flex-grow: 1;
    overflow; scroll;
    margin-top: 1rem;
  }
  
  .walker_details {
    display: flex;
    gap: 10px;
    align-items:center;
  }

  .profile_image_component {
    padding: 4px;
    background: #F3F3F3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .online_icon{
    position: absolute;
    bottom: 4px;
    right:4px;
  }
  .image_wrapper {
    display: flex;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
  }

  .walker_basics{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }

  .walker_basics > p {
    color: var(--Black, #000);
    font-family: Mulish;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px; /* 90.909% */
  }

  .walker_name,
  .walker_location {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .walker_name > p {
    color: var(--Black, #000);
    font-family: Mulish;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px; /* 66.667% */
  }

  .walker_location > p {
    color: #979797;
    font-family: Mulish;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px; /* 76.923% */
  }  
    
  .walker_contacts {
    border-radius: 13px;
    background: rgba(245, 245, 245, 0.82);
    padding: 6px 10px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .walker_contacts > .message{
    position: relative;
  }
    
  .walker_contacts > .message > span {
    position: absolute;
    top: -2px;
    left:-2px;
  }
`;
