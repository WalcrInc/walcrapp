import styled from "styled-components";

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0dvh;
  bottom: 0;
  background-color: #ffffff;
  color: #1a1a1a;
  height: 100vh;
  width: 80%;
  /* overflow:hidden ; */
  z-index: 100000;
  gap: 20px;
  padding: 6%;
  font-size:16px ;

  .info, .links, .support{
    display:flex ;
    flex-direction:column ;
    gap:35px;
    /* background-color:red ; */
    height:25dvh ;
  }
  p{
    display:flex ;
    gap:5px;
    align-items:center ;
  }
  .task-work {
    position: absolute;
    bottom: 20px;
  }
`;
