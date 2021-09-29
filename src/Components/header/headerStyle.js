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

export const Profile =  styled.img`
    width: 4.2%;
    height: 55%;;
    align-self:center;
    border-radius: 50px;
    border: 3px solid #8850BF;
`