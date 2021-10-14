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
import { REQ_MOVIES_INITIAL } from "../../Service_API/SERVER_request"

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
    }

    if (popularMovies === []) {
        return (
            <div className="App">
                <Wallpaper></Wallpaper>
                <img className="logo" src={gif} alt="gif logo" />
            </div>
        );
    }

    return (
        <Main >
            <Wallpaper />

            <Logo src={gif} />

            <Carousel >
                {popularMovies.map((movie) => {
                    return (
                        <img height="20%" key={movie.id} src={`${imgURL}${movie.poster_path}`} alt="poster movies" />
                    );
                })};
            </Carousel>

            <Title>Hundreds of stories for you to get to know.</Title>
            <Button onClick={getLogin} className="btn-outset">START WATCHING</Button>

            <Footer />
        </Main>
    )
}

// ---------------------- video  ----------------------
{/* <h3> Movie </h3> */ }
{/* <iframe className="initial-video" src="https://www.youtube.com/embed/6MRxT8kz30k?autoplay=1&mute=0&loop=1&showinfo=1&controls=0&modestbranding=1&autohide=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }