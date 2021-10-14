import { ListMovie, ImgMovieCart, ImgTrash } from "./cardCart.style";
import trash from "../../images/trash.png"

const imgURL = "https://image.tmdb.org/t/p/w200";

export default function CartDiv(props) {
    const movie = props.movie;

    const remove = (id) => {
        props.removeMovie(id);
    }

    return (
        <>
            <ListMovie>
                <ImgMovieCart src={`${imgURL}${movie.poster_path}`} />
                <h3>{movie.title}</h3>
                <h3>R${Number(movie.vote_average) * 10},00</h3>
                <ImgTrash onClick={() => { remove(movie) }} src={trash} alt="trash" />
            </ListMovie>
        </>
    )
}