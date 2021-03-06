import styled from "styled-components";

export const Baseboard = styled.footer`
    width: 100%;
    height: 3%;
    font-size: 2vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 2;

    span{
        width: 12%;
        cursor: pointer;

        @media screen and (max-width: 600px) {
            &{
                width: 100%;
            }
          }
    }
`