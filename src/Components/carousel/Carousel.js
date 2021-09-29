import styled from "styled-components";

export const Carousel = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: space-evenly;
    gap: 1%;
    overflow: hidden;
    overflow-y: hidden;
    position: relative;
    z-index: 2;

    img{
        margin: 0;
        padding: 0;
    }
`