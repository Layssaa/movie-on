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
import HandlePagination from '../../Components/pagination/pagination';

// import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AddCart } from '../../Components/addCart/AddCart';
import Footer from '../../Components/Footer/Footer';

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

        <Banner />

        {!movies ? <></> :
          (<>
            {movies.map((element, index) => {
              return (
                <CardLetter add={setAddCartFeedback} key={index} movie={element} onclick={goToSingleMovie} addMovie={setAddMovie} />
              )
            })
            }
          </>)
        }
      </Dashboard>
    </Main>
  )
}


// (<>{
//   <HandlePagination add={setAddCartFeedback} movieList={movies} onclick={goToSingleMovie} addMovie={setAddMovie} />
// }</>)