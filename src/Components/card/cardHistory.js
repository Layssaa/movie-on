import { Card, Img } from "./card.style"
const imgURL = "https://image.tmdb.org/t/p/w200";

export default function CardHistory(props){
    const movie = props.movie;
    return(
        <Card>
            <Img src={`${imgURL}${movie.poster_path}`} />
            <p>{movie.title}</p>
        </Card>
    )
}