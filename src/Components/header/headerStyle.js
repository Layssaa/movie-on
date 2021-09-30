import styled from "styled-components";

export const HeaderHome = styled.header`
    width: 100%;
    height: 16%;
    top: 0%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position:absolute;
    p{
        width: 6%;
        height: 12%;
        font-size: 20px;
        cursor:pointer;
    }
    
    p:hover{
        color: #EBCDFF ;
    }

`

export const Cart = styled.img`
    width: 2.4%;
    height: 28%;;
    align-self:center;
    rigth: 3%;
    cursor:pointer;
`

export const Profile = styled.img`
    width: 4.2%;
    height: 55%;;
    align-self:center;
    border-radius: 50px;
    border: 3px solid #8850BF;
    cursor:pointer;
`

export const Quit = styled.div`
    position:absolute;
    width: 7%;
    height: 30%;
    top:80%;
    right:3.5%;
    font-size: 17px;
    cursor:pointer;
    text-align:center;
    background: #121316;
    border-radius: 4px;
    border: 1px solid #0B0B0C;

    &:hover{
        background: #101011;
    }
`