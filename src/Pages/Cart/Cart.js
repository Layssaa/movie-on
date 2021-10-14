import React, { useContext, useEffect, useState } from "react";
import Header from '../../Components/header/header';
import { Main } from '../../Components/main/main';
import CartDiv from '../../Components/card/cardCart';
import { MyContext } from "../../Context/Context";
import { ProductDiv } from "../../Components/singleProduct/CardSingleProductStyle";
import Button from "../../Components/Button/Button";
import { ButtonCancel, FinalizeOrder, H3 } from "../../Components/card/cardCart.style";
import { useHistory } from "react-router-dom";
import { RemoveCart } from "../../Components/addCart/AddCart";


export default function Cart() {
    const { CartMovie, setRemoveMovie, setAddHistory, setCleanMovie } = useContext(MyContext);
    const [removed, setRemoved] = useState(false);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    const removeMovie = (movie) => {
        setRemoveMovie(movie);
        setRemoved(true);
        setTimeout(() => {setRemoved(false) }, 1500);

    };

    useEffect(() => {
        setTotal(() => {
            let valor = 0;
            CartMovie.forEach(element => {
                valor += Number(element.vote_average) * 10;
            });
            return valor
        });
    }, [CartMovie]);

    const finalizedOrder = async () => {
        await setAddHistory(CartMovie);
        await setCleanMovie();
        history.push("/finished");
    };

    const cancel = () => {
        history.push("/home");
    }

    if (total == 0) {
        return (
            <Main>
                <Header />
                <ProductDiv>
                    <h3>Vazio</h3>
                </ProductDiv>
            </Main>

        )
    }

    return (
        <Main>
            <Header />
            <ProductDiv>
                <FinalizeOrder>
                    {
                        CartMovie.map((element) => {
                            return <CartDiv key={element.id} removeMovie={removeMovie} movie={element} />
                        })
                    }
                </FinalizeOrder>
                <H3>R${total},00</H3>
                <Button onClick={finalizedOrder}>FINALIZE ORDER</Button>
                <ButtonCancel onClick={cancel}>CANCEL</ButtonCancel>
                <RemoveCart open={removed} />
            </ProductDiv>
        </Main>
    )
}