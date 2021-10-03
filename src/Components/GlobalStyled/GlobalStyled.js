import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 300;
    color: #fff;
    outline:none;
    text-decoration:none;
    box-sizing: border-box;

  }
  
  body{
    width: 100%;
    height: 100%;
    background-color: #191A1F;
  }

  body::-webkit-scrollbar {
    width: 12px;              
  }

  body::-webkit-scrollbar-track {
      background: none;    
      border-radius: 20px;   
  }

  body::-webkit-scrollbar-thumb {
      background-color: #141416;    
      border-radius: 20px;      
      border: 3px solid #191A1F;  
  }

  form {
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;

    padding: 10px 0px;
  }

`