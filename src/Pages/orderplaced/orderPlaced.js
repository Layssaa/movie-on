import React from "react";
import Header from "../../Components/header/header";
import { Main } from "../../Components/main/main";
import { ProductDiv } from "../../Components/singleProduct/CardSingleProductStyle";
import img from "../../images/Logo-main.png"
import { LogoImgFinished } from "../../Components/logo/logoStyle";
import ButtonInitial from "../../Components/Button/Button";
import { Text } from "../../Components/card/card.style";

import { useHistory } from "react-router-dom";


export default function Finished() {
    const history = useHistory()

    const backToCatalog = () => {
        history.push("/home");
    }

    return (
        <Main>
            <Header />
            <ProductDiv>
                <LogoImgFinished src={img} />

                <Text>
                    Thank you for your request, we will send a proof of purchase with more information to your e-mail.
                </Text>

                <ButtonInitial onClick={backToCatalog}>BACK TO THE CATALOG</ButtonInitial>

            </ProductDiv>
        </Main>
    )
}