import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
}

body{
    font-family: "Montserrat", "Lato", "Inter", sans-serif;
    //background: #757575;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(117,117,117,1) 35%, rgba(4,143,171,1) 100%);

}

button{
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid white;
    border-radius: 6px;
    background: #464d70;
    color: white;
    transition: all 0.5s ease;
    font-weight: 600;
    &:hover{
        background-color: black;
        color: white;
    }
    
}

h2{
    font-size: 2.2rem;
    font-family: "Montserrat", cursive;
    font-weight: regular;
    color: white;
    margin: 1.5rem;
    border: 3px solid white;
    width: 30%;
    margin: 2rem auto;

}

form{
    font-weight: 500;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 3% 40%;
    background: #a1ac88 ;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
}

`;


export default GlobalStyle; 