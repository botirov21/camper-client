import styled from "styled-components";
export const Navdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
  gap: 10px;
  padding: 50px;
  position: fixed;
  z-index:1;
  background-color:white;
  a {
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 46px;
    color: #006dab;
    cursor: pointer;
    text-decoration: none;
   
  }

  @media (max-width: 1100px) {
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
    h1 {
      font-family: monospace;
      font-size: 30px;
      font-weight: 600;
      line-height: 37px;
      letter-spacing: 0em;
      text-align: left;
      width: 100%;
    }
  }

`;
export const Hamburger = styled.div`
  display: none;

  @media (max-width: 1100px) {
    display: flex;
    cursor: pointer;
  }
  @media (max-width: 420px) {
    display: flex;
    cursor: pointer; }
`;

export const Hamburgerdata = styled.div`
display: flex;
flex-direction:column;
gap:20px;
padding: 5% 0% 0% 10%;
h1{
font-family: Montserrat;
font-weight: 600px;
font-size:25px;
color: #006DAB;
margin-bottom: 5px;
}
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p:hover{
color: #006DAB;
}
`
export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  width: 70%;
  height: fit-content;
  a {
    font-family: monospace;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #373737;
    
  }
  a:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #006dab;
    height: 40px;
    background: rgba(0, 109, 171, 0.05);
    border-radius: 10px;
    font-family: monospace;
  
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const Selection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  @media (max-width: 420px) {
      display: none;
  }
  @media (max-width: 1100px) {
      display: none;
  }
`;
export const Dropmenu = styled.div`
display: block;
  background-color: white;
  z-index: 1;
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 250px;
  width: 105vw;
  -webkit-box-shadow: 0 3px 4px #807e7e;
  -moz-box-shadow:  0 3px 4px #807e7e;
  box-shadow: 0 3px 4px #807e7e;
`;
export const DropdownShow = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  gap: 90px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      cursor: pointer;
      color: #006dab;
      height: 40px;
      border-radius: 10px;
      width: 100%;
      font-family: monospace;
    }
  }
`;
