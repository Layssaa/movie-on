import React from "react"
import { InputStyle, InputFlex } from "./InputStyle"

export default function Input(props) {
    return (
        <>
            <InputFlex>
                <InputStyle {...props}></InputStyle>
            </InputFlex>
        </>
    )
}