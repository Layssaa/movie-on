import styled from "styled-components";

export const Title = styled.h3`
    height: 5%;
    font-size: 2.1vw;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 600px) {
        &{
            width: 80%;
            height:8%;
            font-size: 4vh;
        }
      }
`