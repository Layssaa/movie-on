import React from "react";
import styled from "styled-components";

export const Form = styled.div`
    width: 45%;
    height: 60%;
    background:#23242C;
    border-radius: 6px;
    box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    position:relative;
    z-index:2;
    margin-bottom: 5%;
`
export const Head = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content:space-evenly;
    align-content: center;

    a{
        margin-top: 2%;
        width: 40%;
        height: 100%;
        cursor:pointer;
    }

    span{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        align-self:center;
        cursor:pointer;
    }
     span:hover{
        background:#191A1F;
        border-radius: 4px;
    }
`

export const Text = styled.p`
    width: 100%;
    height: 5%;
    font-size: 15px;
    align-self: flex-start;
    cursor:pointer;

    span{
         text-decoration: underline;
    }

    span:hover{
        color: #EBCDFF ;
    }

    a{
        width: inherit;
        height: inherit;
    }
`

export const TextCreatAcount = styled(Text)`
    a:hover{
        color: #EBCDFF ;
    }
`