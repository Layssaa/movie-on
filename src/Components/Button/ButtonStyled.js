import styled from "styled-components";

export const ButtonDefault = styled.button`
    cursor: pointer;
    width: inherit;
    height: inherit;
    border: none;
    
    &:hover{
         background: #9F67D7;
    }
    &:active{
        border-bottom: 3px solid #61378b;
    }
`;

export const ButtonInitial = styled(ButtonDefault)`
    width: 30vw;
    height: 10%;
    background-color: #8850BF;
    border-radius: 4px;
    color: #fff;
    font-size: 1.8vw;
    font-weight: 400;
    position: relative;
    z-index: 2;
    text-align:center;

    @media screen and (max-width: 600px) {
        &{
            width: 80%;
            height:8%;
            font-size: 4vh;
        }
      }
`

export const ButtonForm = styled(ButtonDefault)`
    position:absolute;
    width: 60%;
    height: 15%;
    top: 105%;
    background-color: #8850BF;
    border-radius: 4px;
    color: #fff;
    font-size: 3.8vh;
    font-weight: 400;
    z-index: 2;
    text-align:center;
    cursor:pointer;

    
    @media screen and (max-width: 600px) {
        &{
            width: 90%;
            height:15%;
            font-size: 4vh;
        }
      }
`

export const ButtonPagination = styled(ButtonDefault)`
    width: 2%;
    height: 100%;
    background: #121315;
    box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    align-self:flex-end;
`

export const ButtonTeste = styled(ButtonInitial)`
    width: 30vw;
    height: 10%;
    background-color: #8850BF;
    border-radius: 4px;
    color: #fff;
    font-size: 1.8vw;
    font-weight: 400;
    position: relative;
    z-index: 2;
    text-align:center;

    @media screen and (max-width: 600px) {
        &{
            width: 80%;
            height:8%;
            font-size:3vh;
        }
      }
`