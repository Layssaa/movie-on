import { useState } from "react";
import { ImgMovie, ProductDiv, Info, Price, Evaluation, Cast, DivDefault, Actors, CardCast, Name, PDefault, Close } from "./CardSingleProductStyle";

const imgURL = "https://image.tmdb.org/t/p/w300";

export default function Product(props) {
    const [open, setOpen] = useState(false);

    const movie = props.movie;
    const genres = movie.genres;
    const cast = props.cast;

    const names = genres ? genres.map((element) => element.name) : [];

    const addMovie = (film) => {
        props.addMovie(film)
    }

    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true);
        }

    };

    return (
        <ProductDiv>
            <ImgMovie src={`${imgURL}${props.movie.poster_path}`} />
            <Info>
                <h3>{movie.title}</h3>
                <PDefault>{movie.release_date}</PDefault>
                <PDefault>{names.join([", "])}</PDefault>

                <h4>{movie.overview}</h4>
                <PDefault>Duration: {movie.runtime} minutes</PDefault>
                <span onClick={handleClick}>Cast</span>
                <Cast open={open}>{
                    !cast ? <>Loading</> : cast.map(element => {
                       if(element.profile_path === null){
                           return
                       }
                        return (
                            <CardCast>
                                <Actors src={`${imgURL}${element.profile_path}`}/>
                                <Name>{element.character} by {element.name}</Name>
                            </CardCast>
                )})
                }
                </Cast>
                <DivDefault>
                    <button onClick={() => { addMovie(movie) }} >WATCH</button>

                    <Price>${Number(movie.vote_average) * 10},00</Price>
                    <Evaluation> {Number(movie.vote_average) * 10}% </Evaluation>
                </DivDefault>
                {open?<Close onClick={handleClick}>X</Close>:<></>}

            </Info>
        </ProductDiv>
    )
}