import React, { useEffect, useState, useContext } from 'react';
import { Main } from '../../Components/main/main';
import Header from '../../Components/header/header';
import { useHistory } from "react-router-dom"
import Banner from '../../Components/banner/Banner';
import CardLetter from '../../Components/card/card';
import axios from 'axios';
import { Dashboard } from '../../Components/card/card.style';
import { MyContext } from "../../Context/Context"

// -------------- paginação ----------------
import Pagination from '../../Components/pagination/pagination';

// import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AddCart } from '../../Components/addCart/AddCart';

const KEY = "f93417762b0d5f1e87448cbe259e5b31";

const getMoviesMostPopular = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`);
  return response.data.results;
};

export default function Home() {
  const [movies, setMoviesList] = useState();
  const { setAddMovie } = useContext(MyContext)
  const history = useHistory();
  const [addCartFeedback, setAddCartFeedback] = useState(false);

  const goToSingleMovie = (idMovie) => {
    history.push(`/movie/${idMovie}`)
  }

  useEffect(() => {
    (async () => {
      setMoviesList(await getMoviesMostPopular());
    })();
  }, []);

  return (
    <Main>
      <Header />

      <Dashboard>

        {/* <iframe className="initial-video" src="https://www.youtube.com/embed/6MRxT8kz30k?autoplay=1&mute=0&loop=1&showinfo=1&controls=0&modestbranding=1&autohide=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <Banner />

        {!movies ? <></> :
          (<>
            {movies.map((element, index) => {
              return (
                <CardLetter add={setAddCartFeedback} key={index} movie={element} onclick={goToSingleMovie} addMovie={setAddMovie} />
              )
            })
            }
          </>)}

        {/* <Stack>
          <Pagination count={10} />
          </Stack> */}
      </Dashboard>

      {/* <Pagination limit={12} total={20} offset={10} /> */}
      {/* {addCartFeedback && <AddCart />} */}
    </Main>
  )
}

{/* <iframe className="initial-video" src="https://www.youtube.com/embed/6MRxT8kz30k?autoplay=1&mute=0&loop=1&showinfo=1&controls=0&modestbranding=1&autohide=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }
