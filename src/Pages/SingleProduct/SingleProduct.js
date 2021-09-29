import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, } from "react-router-dom";
import Header from "../../Components/header/header"
import { Main } from "../../Components/main/main"
import Product from "../../Components/singleProduct/CardSingleProdut"
import Loading from "../../images/gif/gif-logo-.gif"
import { Load } from "../../Components/logo/Loading";
import { MyContext } from "../../Context/Context"

const KEY = "f93417762b0d5f1e87448cbe259e5b31";

const getMovie = async (movie_id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`)
        return response.data
    } catch {
        return false
    }
}

const getCredit = async (movie_id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`)
        return response.data
    } catch {
        return false
    }
}

export default function SingleProduct() {
    const { CartMovie, setAddMovie } = useContext(MyContext)
    const [movie, setMovie] = useState();
    const [credit, setCredit]=useState();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        (async ()=>{
            setMovie(await getMovie(id));
            setCredit(await getCredit(id))
        })()
    }, []);

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
            <Product addMovie={setAddMovie} movie={movie} />
        </Main>
    )
}