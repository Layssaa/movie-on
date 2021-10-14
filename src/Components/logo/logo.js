import React from "react";
import img_Secondary from "../../images/Logo-Secondary.png";
import { LogoImg, LogoImgSecondary } from "./logoStyle";

export function Logo(props){
    return(
        <LogoImg src={props.src}  />
    )
}

export function SecondaryLogo(props){
    return(
        <LogoImgSecondary {...props} src={img_Secondary} />
    )
}