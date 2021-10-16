import styled from "styled-components";

export const LogoImg = styled.img`
    width: 13%;
    height: 13%;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 600px) {
        &{
            width: 40%;
            height:10%;
        }
      }
`;

export const LogoImgSecondary = styled.img`
    width: 7%;
    height: 65%;
    position: relative;
    z-index: 2;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        &{
            width: 20%;
            height:40%;
            font-size: 4vh;
        }
      }
`;

export const DivLogo = styled.div`
    width: 45vw;
    height:52vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const LogoImgFinished = styled.img`
    width: 11.6vw;
    height:10vh;
`;

