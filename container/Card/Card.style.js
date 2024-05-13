import styled from "styled-components";

export const CardStyle = styled.div`
padding:6% ;
header{
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
}
header h1{
    font-size:18px ;
    font-weight:700 ;
}
.body{
    padding-top:6% ;
}

//step 2
form{
    display:flex ;
    flex-direction:column ;
    gap:30px;
}
form label{
    font-size:16px ;
    font-weight:400 ;
}
button:hover{
    background-color:#1a1a1a ;
  }

`