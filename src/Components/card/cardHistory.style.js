import styled from "styled-components";

export const ButtonTrash = styled.div`
    position:fixed;

    display:flex;
    justify-content:center;
    align-items:center;

    width: 7%;
    height: 14%;
    background: #0B0B0C;
    border-radius: 50px;

    top: 80%;
    left: 90%;
    cursor:pointer;

    &:hover{
        background: #101011;
    }
`

export const Trash = styled.img`
    width: 70%;
    height: 70%;
`