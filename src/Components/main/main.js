import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Main = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-around;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 2;
    text-align:center;
    gap:2%;

    h3{
        font-size:25px;
        margin-top: 0.5%;
        height: fit-content;
    }

  
`