import styled from "styled-components";

export const SideNavContainer = styled.div`
  position: fixed;
  top: 0dvh;
  bottom: 0;
  width: 100%;
  color: #1a1a1a;
  display: flex;
  z-index: 2;
 
  font-size: 16px;
  .right {
    width: 80%;
    background-color: #ffffff;
    padding: 6% 4%;
    height: 100vh;
    overflow-y:scroll ;
    display:flex ;
    flex-direction:column ;
    gap: 50px;
    border-radius:0 29px 29px 0 ;
  }

   /* Hide scrollbar */
   .right::-webkit-scrollbar {
    display: none;
  }

  .right {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
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
  .info-link{
    display:flex ;
    flex-direction:column ;
    gap: 50px;
  }
  .info{
    margin-top:30px ;
    display:flex;
    justify-content:space-between ;
    /* align-items: center; */
    /* gap:10px; */
  }
  .info span{
    margin-top:5px ;
  }

  .image-container{
    background-color:pink ;
    border-radius:100% ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    width:50px ;
    height:50px ;
  }

  .links{
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    /* color:red ; */
    /* background-color:red ; */
    /* height: 15dvh; */
  }

  .task{
    border:1px dotted #1a1a1a ;
    border-radius:8px ;
    padding:3% ;
  }
  .support {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size:14px ;
    /* color:red ; */
    /* background-color:red ; */
    /* height: 15dvh; */
  }
  .task-work {
    display: flex;
    justify-content:space-between ;
    align-items:center ;
    align-items:center ;
    border: 1px solid #F0F2F6;
    /* border: 1px solid #1a1a1a; */
    padding:4% 3% ;
    border-radius:8px ;
    font-size:15px ;
    
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
    font-size:16px ;
    font-weight:700 ;
    color:#1a1a1a ;
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
