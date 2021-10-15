import styled from "styled-components";
import { ButtonDefault } from "../Button/ButtonStyled";

export const Dashboard = styled.div`
    display: flex;
    width:inherit;
    height: 64%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap:3.2vh;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 20%;
    height: 90%;
    background: #23242C;
    box-shadow: -1.3vh 1.3vh 0.5vh rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    padding: 10px 5px;

    p{
        font-size: 2.5vh;
        height: fit-content;
    }
    &:hover{
        transform: scale(1.03)
    }
`;

export const Img = styled.img`
    width: 60%;
    height: 65%;
    border-radius: 2px;
    cursor:pointer;
`;

export const ButtonsAction = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    height: 10%;
    gap: 0.5vh;

    button {
        width: 12.5vh;
        height: 98%;
    }
`;

export const Icon = styled.img`
    width: 28%;
    height: 55%;
`;

export const ButtonsMovies = styled(ButtonDefault)`
    background: #8850BF;
    border-radius: 4px;
    &:active{
        border: 0.5px solid #61378b;
    }
`;

export const MovieHeart = styled.img`
    width: 18%;
    height: 115%;
    cursor:pointer;
`;

export const AudienceEvaluation = styled.p`
    width:6vh;
    padding: 2.7% 2.7%;
    border-radius: 50px;
    background:#8850BF;
    margin-left: 96%;
    margin-top: -8%;
    
`;

export const CategorieCard = styled(Card)`
        img{
            width: 41%;
            height: 35%;
            cursor:pointer;
        }

        h3{
            cursor:pointer;
            font-size: 3.5vh;
        }
`;

export const Text = styled.h3`
        width: 85%;
`;