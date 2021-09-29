import styled from "styled-components";
import { Flex } from "../main/main"

export const InputStyle = styled.input`
    width: 90%;
    height: 100%;
    background: none;
    border:none;
    border-bottom: 1px solid #525460;
    font-size: 20px;
    text-align:initial;
    padding-left: 1%;
    padding-bottom: 1%;


    &:placeholder{
        color: #D2D2D2;
    }

    &:focus{
        border-color: #C3A8D4;
        background: #1D1F26;

    }
`

export const InputFlex = styled(Flex)`
    width: 70%;
    height: 10%;
    justify-content: center;
    align-contect:center;

    label {
        width: 20%;
        height: inherit;
    }
`