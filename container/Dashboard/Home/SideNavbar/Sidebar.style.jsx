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
  z-index: 100000;
  gap: 40px;
  padding: 6%;
  font-size: 16px;

  .info,
  .links,
  .support{
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* background-color:red ; */
    /* height: 15dvh; */
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
  .task-work {
    position: absolute;
    bottom: 20px;
  }

 
`;
