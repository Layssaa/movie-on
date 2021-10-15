import React from 'react';
import gif from "../../images/gif/completed.gif";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";
import { Title } from "../../Components/Title/TitleStyled";
import { Wallpaper } from "../../Components/wallpaper/wallpaper";
import { Main } from "../../Components/main/main";
import { Carousel } from "../../Components/carousel/Carousel";
import { Logo } from "../../Components/logo/logo";
import { REQ_MOVIES_INITIAL } from "../../Service_API/SERVER_request";

const imgURL = "https://image.tmdb.org/t/p/w200";

export default function Initial() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        (async () => {
            setPopularMovies(await REQ_MOVIES_INITIAL.getMoviesInitial());
        })();
    }, []);

    const history = useHistory();
    const getLogin = () => {
        history.push("/login");
    };

    if (popularMovies === []) {
        return (
            <div className="App">
                <Wallpaper></Wallpaper>
                <img className="logo" src={gif} alt="gif logo" />
            </div>
        );
    };

    return (
        <Main >
            <Wallpaper />

            <Logo src={gif} />

            <Carousel >
                {popularMovies.map((movie) => {
                    return (
                        <img key={movie.id} src={`${imgURL}${movie.poster_path}`} alt="poster movies" />
                    );
                })}
            </Carousel>

            <Title>Hundreds of stories for you to get to know.</Title>
            <Button onClick={getLogin} className="btn-outset">START WATCHING</Button>

            <Footer />
        </Main>
    );
};