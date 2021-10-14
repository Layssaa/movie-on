import Header from '../../Components/header/header';
import { Main } from '../../Components/main/main';
import { Dashboard } from "../../Components/card/card.style"
import React, { useContext, useState } from "react"
import { MyContext } from "../../Context/Context"
import CardLetter from '../../Components/card/card';
import { useHistory } from 'react-router';

export default function WishList() {
    const [addCartFeedback, setAddCartFeedback] = useState(false);

    const { wishList, setAddMovie } = useContext(MyContext);
    const history = useHistory();

    const goToSingleMovie = (idMovie) => {
        history.push(`/movie/${idMovie}`)
    }

    return (
        <Main>
            <Header />
            <Dashboard>
                {
                    wishList.map((element) => <CardLetter key={element.id} movie={element} onclick={goToSingleMovie} addMovie={setAddMovie} add={setAddCartFeedback} />)
                }

            </Dashboard>
        </Main>
    )
}