import React, { useEffect, useState, useContext } from "react";
import Header from "../../Components/header/header"
import { Main } from "../../Components/main/main"
import Product from "../../Components/singleProduct/CardSingleProdut"
import Loading from "../../images/gif/gif-logo-.gif"
import { Load } from "../../Components/logo/Loading";
import { MyContext } from "../../Context/Context"
import { REQ_MOVIES_ONLY, REQ_MOVIES_CREDIT } from "../../Service_API/SERVER_request";
import USE_PARAMS_ID_MOVIE from "../../Context/UseParams_SingleProduct";

export default function SingleProduct() {
    const { setAddMovie } = useContext(MyContext);
    const [movie, setMovie] = useState();
    const [credit, setCredit] = useState();
    const id  = USE_PARAMS_ID_MOVIE();

    useEffect(() => {
        (async () => {
            setMovie(await REQ_MOVIES_ONLY.getMovie(id));
            setCredit(await REQ_MOVIES_CREDIT.getCredit(id));
        })()
    }, []);

    useEffect(()=> console.log(credit),[credit])

    if (!movie) {
        return (
            <Main>
                <Header />
                <Load src={Loading} />
            </Main>
        )
    }

    return (
        <Main>
            <Header />
            <Product addMovie={setAddMovie} movie={movie} cast={credit}/>
        </Main>
    )
}