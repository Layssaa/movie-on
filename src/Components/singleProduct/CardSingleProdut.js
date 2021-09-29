import { ImgMovie, ProductDiv, Info, Price, Evaluation } from "./CardSingleProductStyle";
import { ButtonDefault } from "../Button/ButtonStyled";

const imgURL = "https://image.tmdb.org/t/p/w300";

export default function Product(props) {

    const movie = props.movie;
    const genres = movie.genres;

    const names = genres ? genres.map((element) => element.name) : [];

    const addMovie = (film) => {
        props.addMovie(film)
    }

    return (
        <ProductDiv>
            <ImgMovie src={`${imgURL}${props.movie.poster_path}`} />
            <Info>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{names.join([", "])}</p>

                <h4>{movie.overview}</h4>
                <p>Duration: {movie.runtime} minutes</p>
                <span>Cast</span>
                <div>
                    <button onClick={() => { addMovie(movie) }} >WATCH</button>

                    <Price>${Number(movie.vote_average) * 10},00</Price>
                    <Evaluation> 84% </Evaluation>
                </div>
            </Info>
        </ProductDiv>
    )
}