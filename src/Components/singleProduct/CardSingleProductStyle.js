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
    padding: 10px 5px;

`;

export const ImgMovie = styled.img`
    width: 27%;
    height: 85%;
    border-radius: 4px;
`;

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
        transition: all 0.6s ease-in-out;
    }

    span:hover{
        background: #1A1B21;
        cursor: pointer;
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
`;

export const DivDefault = styled.div`
    display:flex;
    height: 13%;
    justify-content: space-between;
`;

export const PDefault = styled.p`
    font-size: 14px;
    color: #D2D2D2;
    height: 7%;
`;

export const Price = styled.h3`
    height: inherit;
    width: 20%;

`;

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
`;

export const Cast = styled.div`
    position:absolute;
    display:${(props) => (props.open ? 'flex' : 'none')};
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    width: 50%;
    max-height: ${(props) => (props.open ? '70%' : '0')};
    transition: all 1s ease-in-out;
    overflow: hidden;
    background: #1A1B21;
    border-radius: 3px;
    z-index:200;
    overflow-y: scroll;
    gap: 1%;

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
        border: 3px solid #191A1F;  
    }
`;

export const CardCast = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    height: 40%;
    padding-top: 1%;
`;

export const Actors = styled.img`
    width: 75%;
    height: 95%;
`;

export const Name = styled.p`  
    width: 75%;
    margin-top: -15%;
    background: rgba(23, 23, 24, 0.5);
    text-align:center;
    font-size: 14px;
    height: 20%;
    text-overflow: ellipsis;
`;

export const Close = styled.p`
    position: absolute;
    background:#8850BF;
    width: 2.2%;
    height:4.2%;
    top:19%;
    right:11.5%;
    border-radius: 80px;
    text-align:center;
    z-index: 1000;
    cursor:pointer;
    font-weight: 100;
`;