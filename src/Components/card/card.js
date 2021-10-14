import { Card } from "./card.style"
import play from "../../images/play_white.png"
import cart from "../../images/cart.png"
import heart from "../../images/heart.png"
import heartLike from "../../images/heart_like.png"
import React, { useContext, useEffect } from "react"
import { MyContext } from "../../Context/Context"

import { ButtonsAction, ButtonsMovies, Img, MovieHeart, Icon, AudienceEvaluation } from "./card.style"
import { useState } from "react"
import { AddWishList } from "../addCart/AddCart"

const imgURL = "https://image.tmdb.org/t/p/w200";

export default function CardLetter(props) {
    const { wishList, setAddWish, setRemoveWish } = useContext(MyContext);
    const movie = props.movie;

    const [like, setLike] = useState(false);
    const [ feedback, setFeedback ] = useState(false);


    useEffect(() => {
        (async () => {
            setLike(() => {
                if (wishList.find((film) => film.id === movie.id)) {
                    return true
                } else {
                    return false
                }

            });

        })()

    }, [wishList]);

    const liked = () => {
        if (like) {
            setRemoveWish(movie);
            setLike(false);
            setFeedback(false);
        }
        else {
            setAddWish(movie);
            setLike(true);
            setFeedback(true)
        };
        
        setTimeout(() => { setFeedback(false) }, 1500);
    };

    const goToMovie = () => {
        props.onclick(movie.id);
    };

    const addMovieOnCart = () => {
        props.addMovie(movie);
        props.add(true);
        setTimeout(() => { props.add(false) }, 1500);
    };


    return (
        <>
            <Card>
                <AudienceEvaluation>{movie.vote_average}</AudienceEvaluation>
                <Img onClick={goToMovie} src={`${imgURL}${movie.poster_path}`} alt="Poster movie" />
                <p onClick={goToMovie}>{movie.title}</p>
                <p>R$ {Number(movie.vote_average) * 10},00</p>
                <ButtonsAction>
                    <ButtonsMovies onClick={goToMovie}> <Icon src={play} alt="Play button" /> </ButtonsMovies>
                    <ButtonsMovies onClick={addMovieOnCart}> <Icon src={cart} alt="Cart button" /> </ButtonsMovies>
                    <MovieHeart onClick={liked} alt="Like button" src={like ? heartLike : heart} />
                </ButtonsAction>
            </Card>
            <AddWishList open={feedback} />
        </>
    )
}