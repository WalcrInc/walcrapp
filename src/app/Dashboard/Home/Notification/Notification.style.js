import styled from "styled-components";

export const NotificationContainer = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  color: #1a1a1a;
  height: 100vh;
  width: 100%;
  z-index: 100000;
  gap: 40px;
  padding: 6%;
  font-size: 16px;
 
  header {
    display: flex;
    justify-content: space-between;
    align-items:center ;
  }
  header h1 {
    font-size: 18px;
    font-weight: 700px;
  }
  .body{
    overflow:scroll ;
    display:flex ;
    flex-direction:column ;
    gap:30px;
  }

  .info {
    display:flex ;
    flex-direction:column ;
    gap:20px;
  }

  .info h1{
    font-size:14px ;
    font-weight:400 ;
  }
  .info h2{
    font-size:16px ;
    font-weight:700 ;
  }
  .info p{
    font-size:14px ;
    font-weight:400 ;
    color:#8C92AB ;
  }
  .sub-info{
    display:flex ;
    gap:20px;
  }
  .sub-info .icon{
    background-color:#1a1a1a ;
    width:40px ;
    height:40px ;
    border-radius:50% ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    padding:3% ;
  }

  .sub-info .text{
    display:flex ;
    flex-direction:column ;
    gap:5px;
  }
`;
