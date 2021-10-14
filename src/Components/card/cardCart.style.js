import styled from "styled-components";
import { ButtonDefault } from "../Button/ButtonStyled";
import { ProductDiv } from "../singleProduct/CardSingleProductStyle"

export const ListMovie = styled.div`
    width : 90%;
    height:40%;
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
`;

export const ImgMovieCart = styled.img`
   width : 10%;
   height:100%;

`;
export const ImgTrash = styled.img`
   width : 3%;
   height:25%;
   cursor:pointer;
`;

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

`;

export const H3 = styled.span`
    height: fit-content;
    text-align: left;
    margin-left: 15%;
    margin-top: 0%;
    font-size: 20px;
`;

export const FinalizeOrder = styled(ProductDiv)`
    overflow-y:scroll;

    margin-top: 0%;
    width:100%;
    background:none;
    border:none;
    box-shadow: none;
    padding:0;

    &::-webkit-scrollbar {
        width: 12px;              
      }

    &::-webkit-scrollbar-track {
        background: none;    
        border-radius: 20px;   
    }

    &::-webkit-scrollbar-thumb {
        background-color: #141416;    
        border-radius: 20px;      
        border: 3px solid #23242C;  

    }
    

`;