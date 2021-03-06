import styled from "styled-components";
import { ButtonDefault } from "../Button/ButtonStyled";
import { ProductDiv } from "../singleProduct/CardSingleProductStyle";

export const ListMovie = styled.div`
    width : 90%;
    height:40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #676767;
    padding-bottom: 2%;

    h3{
        width : fit-content;
        height: 10%;
        font-size:3.5vh;

        @media screen and (max-width: 600px) {
            &{
                 font-size:2vh;
            }
          }
    }

    @media screen and (max-width: 600px) {
        &{
            height:25%;
        }
      }
`;

export const ImgMovieCart = styled.img`
   width : 10%;
   height:100%;

   @media screen and (max-width: 600px) {
    &{
        width:12%;
    }
`;

export const ImgTrash = styled.img`
   width : 3%;
   height:25%;
   cursor:pointer;

   @media screen and (max-width: 600px) {
    &{
        width : 10%;
    }
  }
`;

export const ButtonCancel = styled(ButtonDefault)`
    width: 30%;
    height: 10%;
    background: #191A1F;
    border-radius: 4px;
    font-size: 4vh;

    &:hover{
        background: #1D1E24;
    }

    &:active{
        border-bottom: 3px solid #16171B;
    }

    @media screen and (max-width: 600px) {
        &{
            width: 80%;
            height:8%;
            font-size:3vh;
            background: #40424E;
        }

`;

export const H3 = styled.span`
    height: fit-content;
    text-align: left;
    margin-left: 15%;
    margin-top: 0%;
    font-size: 3.5vh;
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