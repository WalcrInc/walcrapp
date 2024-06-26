import styled from "styled-components";

export const OTPStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 6% 4% 3% 4%;
  .header h1 {
    font-size: 30px;
    font-weight: 700;
  }
  .header p {
    font-size: 16px;
    font-weight: 400;
    color: #5b6178;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .form {
    display: flex !important ;
    gap: 20px;
  }
  .timer{
    display: flex;
  flex-direction: column;
  gap: 20px;
  font-size:16px ;
  font-weight:400 ;
  text-align:center ;
  }
.timer span{
    font-weight:700 ;
}
input:focus{
    box-shadow:0 0 0 0 rgba(0,0,0,0) ;
}
`;
