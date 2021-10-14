import React from 'react';
import 'regenerator-runtime/runtime';
import { MOVIES } from "../data_tets/movies";
import Home from "../Pages/Home/Home";
import { fireEvent, act } from "@testing-library/react";
import { renderWithProviders } from '../data_tets/MyProvider/RenderMyProvider';
import { REQ_MOVIES_POPULAR } from "../Service_API/SERVER_request";

jest.mock("../Service_API/SERVER_request");

const RenderHome = () => {
    return renderWithProviders(<Home />);
}

describe("Home test", () => {
    const Movie = MOVIES[0].results;

    beforeEach(() => {
        REQ_MOVIES_POPULAR.getMoviesMostPopular.mockImplementation(() => Movie);
    });

    test("Test Home Page", async () => {
        const rendered = await RenderHome();
        expect(REQ_MOVIES_POPULAR.getMoviesMostPopular).toHaveBeenCalledTimes(1);
        rendered.getByText(Movie[0].title);
    });

    test("Test Home Page Add Cart", async () => {
        const rendered = await RenderHome();
        act(() => {
            fireEvent.click(rendered.getAllByAltText("Cart button")[0]);
        });
    });

});