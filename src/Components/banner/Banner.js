import React from "react";
import { Ban } from "./Banner.style";

export default function Banner(props) {
    return (
        <>
            <Ban src={props.src}>  </Ban>
        </>
    );
};