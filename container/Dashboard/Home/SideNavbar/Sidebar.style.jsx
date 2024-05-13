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
  gap: 60px;
  padding: 6%;
  font-size: 16px;

  .info,
  .links,
  .support,
  .task-work {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color:red ;
    height:20dvh ;
  }
  p {
    display: flex;
    gap: 5px;
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
  .task-work {
    display:flex ;
    justify-content:flex-end ;
  }
`;
