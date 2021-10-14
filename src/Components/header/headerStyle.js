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
    border: 2px solid #FFFFFF;
    cursor:pointer;
`

export const Quit = styled.div`
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    justify-content:center;
    position:absolute;

    height: ${(props) => (props.open ? '30%' : '0')};
    width: 7%;
    top:80%;
    right:3.5%;

    font-size: ${(props) => (props.open ? '17px' : '0')};
    cursor:pointer;
    text-align:center;
    background: #121316;
    border-radius: 4px;
    border: 1px solid #0B0B0C;

    transition: all 0.5s ease-in-out;

    &:hover{
        background: #23242C;
    }
`