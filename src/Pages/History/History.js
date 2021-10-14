import Header from '../../Components/header/header';
import { Main } from '../../Components/main/main';
import { Dashboard } from "../../Components/card/card.style";
import CardHistory from '../../Components/card/cardHistory';
import { Trash, ButtonTrash } from '../../Components/card/cardHistory.style';

import trashClose from "../../images/trash-close-2.png"
import trashOpen from "../../images/trash-open.png"

import { MyContext } from "../../Context/Context"
import React, { useContext, useState } from 'react';

export default function History() {
    const { moviesOnHistory, setCleanHistory } = useContext(MyContext);
    const [trash, setTrash] = useState(trashClose);

    const changeBackgroundEnter = () =>{
        setTrash(trashOpen);
    }

    const changeBackgroundLeave = () =>{
        setTrash(trashClose);
    }

    if(moviesOnHistory == []){
        <Dashboard>
            <h3>Vazio</h3>
        </Dashboard>
    };

    return (
        <Main>
            <Header />
            <Dashboard>
                {moviesOnHistory.map((movie) => {
                    return <CardHistory movie={movie} key={movie.id}>{movie.title}</CardHistory>
                })}
                <ButtonTrash>
                    <Trash onClick={setCleanHistory} onMouseEnter={changeBackgroundEnter} onMouseLeave={changeBackgroundLeave} src={trash} />
                </ButtonTrash>
            </Dashboard>
        </Main>
    );
};