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
        width: fit-content;
        height: 12%;
        font-size: 3.5vh;
        cursor:pointer;

        @media screen and (max-width: 600px) {
            &{
                font-size: 2vh;
            }
          }
    }
    
    p:hover{
        color: #EBCDFF ;
    }

    @media screen and (max-width: 600px) {
        &{
            gap: 1vw;
            justify-content: space-around;
        }
      }
   
`;

export const Cart = styled.img`
    width: 2.4%;
    height: 28%;;
    align-self:center;
    rigth: 3%;
    cursor:pointer;
    margin-top:2vh;

    &:hover{
        transform: scale(1.1)
    }

    @media screen and (max-width: 600px) {
        &{
           width: 10%;
        }
      }
`;

export const Profile = styled.img`
    width: 6.7vh;
    height: 6.7vh;
    align-self:center;
    border-radius: 20vh;
    border: 2px solid #FFFFFF;
    cursor:pointer;
    margin-top:2.2vh;

    &:hover{
        transform: scale(1)
    }

    @media screen and (max-width: 600px) {
        &{
           display:none;
        }
      }
`;

export const Quit = styled.div`
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    justify-content:center;
    position:absolute;

    height: ${(props) => (props.open ? '30%' : '0')};
    width: 7%;
    top:80%;
    right:3.5%;

    font-size: ${(props) => (props.open ? '3vh' : '0')};
    cursor:pointer;
    text-align:center;
    background: #121316;
    border-radius: 4px;
    border: 0.5px solid #0B0B0C;

    transition: all 0.5s ease-in-out;

    &:hover{
        background: #23242C;
    }
`;

export const Badge = styled.span`
    position:absolute;
    background: #8850BF;
    width:1.7vw ;
    height:3.5vh;
    border-radius: 2vw;
    top: 9vh;
    right: 12.5vw;
    font-size: 2.5vh;

    @media screen and (max-width: 600px) {
        &{
            width:4vw ;
            font-size: 2vh;
            right: 1vw;
        }
      }

`