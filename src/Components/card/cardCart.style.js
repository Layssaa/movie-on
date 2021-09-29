import styled from "styled-components";
import { ButtonDefault } from "../Button/ButtonStyled";

export const ListMovie = styled.div`
    width : 90%;
    height:30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 0.5px solid #676767;
    padding-bottom: 2%;

    h3{
        width : fit-content;
        height: 10%;
        font-size: 20px;
    }
`

export const ImgMovieCart = styled.img`
   width : 10%;
   height:90%;

`
export const ImgTrash = styled.img`
   width : 3%;
   height:25%;
   margin-top: 1%;

`

export const ButtonCancel = styled(ButtonDefault)`
    width: 30%;
    height: 10%;
    background: #191A1F;
    border-radius: 4px;
    font-size: 23px;


    &:hover{
        background: #1D1E24;
    }

    &:active{
        border-bottom: 3px solid #16171B;
    }

`

export const H3 = styled.h3`
    text-align: left;
    margin-left: 15%;
`