import styled from "styled-components";
import { Dashboard } from "../card/card.style";

export const ProductDiv = styled(Dashboard)`
    width:80%;
    height: 75%;
    flex-direction: row;
    justify-content:center;
    background: #23242C;
    box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    margin-top:5%;

`

export const ImgMovie = styled.img`
    width: 27%;
    height: 85%;
    border-radius: 4px;
`

export const Info = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;

    width: 60%;
    height: 90%;

    text-align:left;

    h4{
        height: 30%;
    }

    span{
        background: #191A1F;
        width:50%;
        height: 6%;
        padding-left: 5%;
        border-radius: 4px;
    }

    span:hover{
        background: #1A1B21;
        cursor: pointer;
    }

    p{
        font-size: 14px;
        color: #D2D2D2;
        height: 7%;
    }

    div{
        display:flex;
        height: 13%;
        justify-content: space-between;
    }
    
    button{
        width: 30%;
        padding: 2% 5%;
        border:none;
        border-radius: 4px;
        background: #8850BF;
        cursor:pointer;
    }

    button:hover{
        background: #9F67D7;
    }
`

export const Price = styled.h3`
    height: inherit;
    width: 20%;

`

export const Evaluation = styled.h3`
    position: absolute;

    width: 5%;
    height: 15%;
    top: 25%;
    right: 13%;

    padding: 1.2% 1%;
    border-radius: 40px;
    text-align:center;
    background: #8850BF;
    box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.25);
`