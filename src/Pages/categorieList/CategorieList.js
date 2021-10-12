import { useParams, useHistory } from "react-router-dom";
import { Main } from "../../Components/main/main";
import { useState, useEffect, useContext } from "react";
import Header from "../../Components/header/header";
import { Dashboard } from "../../Components/card/card.style";
import imgLoading from "../../images/gif/completed.gif"
import { Load } from "../../Components/logo/Loading"
import CardLetter from "../../Components/card/card";
import { MyContext } from "../../Context/Context";
import { REQ_MOVIES_WITH_CATEGORIES } from "../../Service_API/SERVER_request";

export default function CategorieList() {
    const { setAddMovie } = useContext(MyContext)
    const [listMovies, setMoviesList] = useState();
    const history = useHistory();
    const categorieName = useParams();
    const name = categorieName.name;

    const [addCartFeedback, setAddCartFeedback] = useState(false);


    const goToSingleMovie = (idMovie) => {
        history.push(`/movie/${idMovie}`)
    }

    useEffect(() => {
        (async () => {
            setMoviesList(await REQ_MOVIES_WITH_CATEGORIES.getMovies(name));
        })();
    }, []);


    if (!listMovies) {
        return (
            <Dashboard>
                <Load src={imgLoading} />
            </Dashboard>
        )
    }

    return (
        <Main>
            <Header />
            <Dashboard>
                {
                    listMovies.map((element, index) => {
                        return (
                            <CardLetter add={setAddCartFeedback} addMovie={setAddMovie} key={index} movie={element} onclick={goToSingleMovie} />
                        )
                    })
                }
            </Dashboard>
        </Main>
    )
}