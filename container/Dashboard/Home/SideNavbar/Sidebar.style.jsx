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
  gap: 50px;
  padding: 6%;
  font-size: 16px;

  .info,
  .links,
  .support,
  .task-work {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* background-color:red ; */
    height: 15dvh;
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
    position: absolute;
    border: 0;
  }

  @media screen and (max-height:400px) {
    height: 15dvh;
  }
  .task-work {
    display: flex;
    justify-content: flex-end;
    position:relative ;
  }
`;
