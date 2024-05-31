import styled from "styled-components";

export const SideNavContainer = styled.div`
  position: fixed;
  top: 0dvh;
  bottom: 0;
  width: 100%;
  color: #1a1a1a;
  display: flex;
  z-index: 100000;

  font-size: 16px;
  .right {
    width: 80%;
    background-color: #ffffff;
    padding: 6%;
    height: 100vh;
    display:grid ;
    grid-template-rows:repaet(4,2fr) ;
    gap: 50px;
  }
  .left {
    width: 20%;
    background-color: #dcdcdc;
    opacity: 0.3;
  }
  .name-address p {
    font-size: 18px;
    font-weight: 700;
  }
  .name-address span {
    color: #5b6178;
    font-size: 14px;
  }
  .info{
    margin-top:30px ;
    display:flex;
    gap:10px;
  }

  .image-container{
    background-color:pink ;
    border-radius:100% ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    width:100px ;
    height:100px ;
  }

  .links,
  .support {
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* color:red ; */
    /* background-color:red ; */
    /* height: 15dvh; */
  }
  .task-work {
    display: flex;
    gap: 20px;
    align-items:center ;
    border: 1px solid #F0F2F6;
    padding:3% ;
    border-radius:16px ;
    /* color:red ; */
    /* background-color:red ; */
    /* height: 15dvh; */
  }
  .task-work .logo{
    font-size:14px ;
    font-weight:700 ;
  }
  
  .task-work .dot{
    width:8px ;
    height:8px ;
    border-radius:100% ;
    background:#F18341 ;
  }
  .task-work .orange{
    font-size:14px ;
    font-weight:700 ;
    color:#F18341 ;
    display: flex;
  }
  p {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .links a {
    text-decoration: none;
  }
  .links a:hover {
    background-color: #1a1a1a;
    color: #fff;
    padding: 3%;
    border-radius: 4px;
  }
  /* .task-work {
    position: absolute;
    bottom: 20px;
  } */
`;
