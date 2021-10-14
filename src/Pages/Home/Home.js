import React, { useEffect, useState, useContext } from 'react';
import { Main } from '../../Components/main/main';
import Header from '../../Components/header/header';
import { useHistory } from "react-router-dom"
import Banner from '../../Components/banner/Banner';
import CardLetter from '../../Components/card/card';
import { Dashboard } from '../../Components/card/card.style';
import { MyContext } from "../../Context/Context";
import { AddCart, AddWishList } from '../../Components/addCart/AddCart';
import { REQ_MOVIES_POPULAR } from '../../Service_API/SERVER_request';

export default function Home() {
  const [movies, setMoviesList] = useState();
  const { setAddMovie } = useContext(MyContext);
  const history = useHistory();
  const [addCartFeedback, setAddCartFeedback] = useState(false);

  const goToSingleMovie = (idMovie) => {
    history.push(`/movie/${idMovie}`)
  }

  useEffect(() => {
    (async () => {
      setMoviesList(await REQ_MOVIES_POPULAR.getMoviesMostPopular());
    })();
  }, []);

  return (
    <Main>
      <Header />

      <Dashboard>
        <Banner />
        {!movies ? <></> :
          (<>
            {movies.map((element) => {
              return (
                <CardLetter add={setAddCartFeedback} key={element.id} movie={element} onclick={goToSingleMovie} addMovie={setAddMovie} />
              )
            })
            }
          </>)
        }
         <AddCart open={addCartFeedback}/>
      </Dashboard>
    </Main>
  );
};
