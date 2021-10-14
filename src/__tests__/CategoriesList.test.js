import React from 'react';
import { renderWithProviders } from '../data_tets/MyProvider/RenderMyProvider';
import CategorieList from '../Pages/categorieList/CategorieList';
import { REQ_MOVIES_WITH_CATEGORIES } from '../Service_API/SERVER_request';
import { MOVIES_WITH_CATEGORIES } from "../data_tets/movies_with_categories";
import USE_PARAMS_CATEGORIE from "../Context/UseParams_CAREGORIE"
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';

jest.mock("../Service_API/SERVER_request");
jest.mock("../Context/UseParams_CAREGORIE");


const RenderMovies = () => {
    return renderWithProviders(<CategorieList />);
}

describe("TEST CATEGORIES LIST", () => {
    const Movies = MOVIES_WITH_CATEGORIES.results;

    beforeEach(() => {
        USE_PARAMS_CATEGORIE.mockImplementation(() => 14);
        REQ_MOVIES_WITH_CATEGORIES.getMovies.mockImplementation(() => Movies);
    });

    test("Render List Categories", async () => {
        const rendered = RenderMovies();
        expect(REQ_MOVIES_WITH_CATEGORIES.getMovies).toHaveBeenCalledTimes(1);
        expect(USE_PARAMS_CATEGORIE).toHaveBeenCalledTimes(1);
        rendered.findByText(Movies[0].title);
    });

    test("Test Home Page Add Cart", async () => {
        const rendered = await RenderMovies();
        act(async() => {
            fireEvent.click(await rendered.findAllByAltText("Cart button")[0]);
        });
    });

})
