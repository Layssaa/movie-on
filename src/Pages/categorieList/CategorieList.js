import { useParams, useHistory } from "react-router-dom";
import { Main } from "../../Components/main/main";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Header from "../../Components/header/header";
import { Dashboard } from "../../Components/card/card.style";
import imgLoading from "../../images/gif/completed.gif"
import { Load } from "../../Components/logo/Loading"
import CardLetter from "../../Components/card/card";
import { MyContext } from "../../Context/Context";

const KEY = "f93417762b0d5f1e87448cbe259e5b31";

const getMovies = async (genre_id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre_id}&with_watch_monetization_types=flatrate`);
    return response.data.results
}

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
            setMoviesList(await getMovies(name));
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