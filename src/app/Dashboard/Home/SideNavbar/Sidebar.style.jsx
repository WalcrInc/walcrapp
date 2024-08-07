import styled from "styled-components";

export const SideNavContainer = styled.div`
  position: fixed;
  top: 0dvh;
  bottom: 0;
  width: 100%;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  z-index: 2;
 
  font-size: 16px;
  .right {
    width: 100%;
    background-color: #ffffff;
    height: 100vh;
    padding: 3rem 2rem 2rem;
  }

  .right-info{
    display:flex ;
    flex-direction:column ;
    gap: 50px;
    height: 100%;
    overflow:scroll;
  }

   /* Hide scrollbar */
   .right-info::-webkit-scrollbar {
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
  .name-address{
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .name-address p {
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom:-8px;
  }
  .name-address span {
    color: #5b6178;
    font-size: 10px;
  }
  .info-link{
    display:flex ;
    flex-direction:column ;
    gap: 1rem;
  }

  .info-link > form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .info-link > form > input {
    outline: none;
    flex: 1;
    font-size: 12px;
  }
  .info{
    margin-top: auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    border-radius: 2.25rem;
    border: 1px solid rgba(0, 0, 0, 0.21);
  }

  .info_details {
    display: flex;
    align-items: center;
    gap:15px;
  }

  .badge {
    background-color: #FFBF9D;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 100%;
    height:20px;
    width: 20px;
    color: #fff;
    font-size:12px;
    font-weight: 700;
    font-style: normal;
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
    width:37px ;
    height:37px ;
  }

  .links{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 0.9375rem;

    /* background-color:red ; */
    /* height: 15dvh; */
  }

  .link_info {
    display:flex;
    align-items:center;
    justify-content: space-between;
  }

  .link_info > p {
    display: flex;
    align-items: center;
  }
  .active {
    opacity; 1;
    color: #1a1a1a;
  }

  .inactive {
    opacity: 0.7;
    color: #000000
  }

  .account_header {
    font-size: 10px;
    font-weight: 700;
    margin: 0 0 -1.5rem;
    opacity:0.7;
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
  }
  .task-work {
    display: flex;
    justify-content:space-between ;
    align-items:center ;
    align-items:center ;
    border: 1px solid #F0F2F6;
    padding:4% 3% ;
    border-radius:8px ;
    font-size:15px ;
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
    padding: 3%;
    transition: .2s ease-out ;
  }
  // .links a:hover {
  //   background-color: #1a1a1a;
  //   color: #fff;
  //   padding: 3%;
  //   border-radius: 4px;
  // }
  /* .task-work {
    position: absolute;
    bottom: 20px;
  } */
`;
