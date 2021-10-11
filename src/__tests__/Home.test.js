import 'regenerator-runtime/runtime'
import { getMoviesMostPopular } from "../Pages/Home/Home"
import { MOVIES } from "../data_tets/movies"
import CardLetter from "../Components/card/card"
import Home from "../Pages/Home/Home"
import Header from "../Components/header/header"
import { render } from "@testing-library/react"
import { renderWithProviders } from './MyProvider/RenderMyProvider.test'

jest.mock(getMoviesMostPopular);  

const RenderHome = () => {
    return renderWithProviders(<Home />);
}

describe("Home test", () => {


    Home.setAddMovie.mockImplementation(() => []);
    Home.goToSingleMovie.mockImplementation(() => []);

    beforeEach(() => {
        getMoviesMostPopular.mockImplementation(() => MOVIES[0].results);
    });

    test("Test home card movie", async () => {
        const rendered = await RenderHome();

    })

})