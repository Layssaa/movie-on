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
    width: 30%;
    height: 10%;
    background-color: #8850BF;
    border-radius: 4px;
    color: #fff;
    font-size: 23px;
    font-weight: 400;
    position: relative;
    z-index: 2;
    text-align:center;
`

export const ButtonForm = styled(ButtonDefault)`
    position:absolute;
    width: 60%;
    height: 15%;
    top: 105%;
    background-color: #8850BF;
    border-radius: 4px;
    color: #fff;
    font-size: 23px;
    font-weight: 400;
    z-index: 2;
    text-align:center;
    cursor:pointer;
`