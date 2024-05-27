import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height:100% ;
  header {
    background: url("/images/home.svg");
    height: 60dvh;
    background-size:cover ;
    background-repeat:no-repeat ;
    /* background-position: 50% ; */
    padding: 6%;
    width:100% ;
  }
  .overlay{
    position:relative ;
    bottom:20px ;
    width:100% ;
    height:112px ;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    padding: 3%;
  }
  .text h1 {
    font-size: 3.4rem;
    font-weight: 800;
    line-height: 50px;
  }

  .text p {
    color: #5b6178;
    font-size: 18px;
  }
`;
