import React from 'react';
import Header from '../../Components/header/header';
import { useEffect, useState } from 'react';
import { Dashboard } from '../../Components/card/card.style';
import CardCategories from '../../Components/card/cardCategories';
import { Main } from '../../Components/main/main';
import { useHistory } from 'react-router';
import { REQ_MOVIES_CATEGORIES } from '../../Service_API/SERVER_request';

export default function Categories() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        (async () => {
            setCategories(await REQ_MOVIES_CATEGORIES.getCategories());
        })();
    });

    const history = useHistory();

    const getList = (genreName) => {
        history.push(`/categories/${genreName}`);
    };

    return (
        <Main>
            <Header />

            <Dashboard>

                {categories.map((element) => {
                    return (

                        <CardCategories value={element.id} onclick={() => getList(element.id)} id={element.id} key={element.name} categorie={element.name}>
                            <p >{element.name}</p>
                        </CardCategories>
                    )
                })}

            </Dashboard>
        </Main >
    )
}
