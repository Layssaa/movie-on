import React from 'react';
import { ButtonInitial } from "./ButtonStyled"

export default function Button(props) {
    return (
        <ButtonInitial {...props}> {props.children} </ButtonInitial>
    )
}