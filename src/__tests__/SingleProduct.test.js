import React from 'react';
import 'regenerator-runtime/runtime';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import { renderWithProviders } from '../data_tets/MyProvider/RenderMyProvider';
import { REQ_MOVIES_ONLY, REQ_MOVIES_CREDIT } from "../Service_API/SERVER_request";
import { MOVIE_ONLY } from '../data_tets/only_movie';
import { MOVIE_CREDIT } from '../data_tets/credit_movie';
import USE_PARAMS_ID_MOVIE from '../Context/UseParams_SingleProduct';

import { fireEvent, act } from "@testing-library/react";

//  ------------------ esse aqui da erro ------------------
jest.mock("../Service_API/SERVER_request");
jest.mock("../Context/UseParams_SingleProduct");

const RenderSingleProduct = () => {
    return renderWithProviders(<SingleProduct />);
}

describe("ONLY MOVIE PAGE", () => {
    const Movie = MOVIE_ONLY;
    const Credit = MOVIE_CREDIT.cast;

    beforeEach(() => {
        USE_PARAMS_ID_MOVIE.mockImplementation(() => 550988)
        REQ_MOVIES_ONLY.getMovie.mockImplementation(() => Movie);
        REQ_MOVIES_CREDIT.getCredit.mockImplementation(() => Credit);
    });

    test("Test Movie Page", async () => {
        const rendered = await RenderSingleProduct();
        expect(REQ_MOVIES_ONLY.getMovie).toHaveBeenCalledTimes(1);
        rendered.findByText(Movie.title);
        rendered.debug();
        
        // nesse, a função é chamada
        // expect(REQ_MOVIES_CREDIT.getCredit).toHaveBeenCalledTimes(1);
    });

});