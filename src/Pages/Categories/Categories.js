import Header from '../../Components/header/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Dashboard } from '../../Components/card/card.style';
import CardCategories from '../../Components/card/cardCategories.style';
import { Main } from '../../Components/main/main';
import iconMovie from "../../images/film-reel_2.png"
import { BanCategories } from '../../Components/banner/Banner.style';
import { useHistory } from 'react-router';
const KEY = "f93417762b0d5f1e87448cbe259e5b31";

const getCategories = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`);
    return response.data.genres;
};

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            setCategories(await getCategories());
        })();
    })

    const history = useHistory();

    const getList = (genreName) => {
        history.push(`/categories/${genreName}`)
    }

    return (
        <Main>
            <Header />
            {/* <BanCategories/> */}
            <Dashboard>

                {categories.map((element) => {
                    return (
                        <CardCategories onclick={() => getList(element.id)} id={element.id} key={element.name} categorie={element.name}>
                            <p >{element.name}</p>
                        </CardCategories>
                    )
                })}

            </Dashboard>

        </Main >
    )
}