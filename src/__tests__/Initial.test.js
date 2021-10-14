import React from 'react';
import { MOVIES } from "../data_tets/movies";
import Initial from '../Pages/Initial/Initial';
import { REQ_MOVIES_INITIAL } from "../Service_API/SERVER_request";
import { renderWithProviders } from '../data_tets/MyProvider/RenderMyProvider';
import 'regenerator-runtime/runtime';

jest.mock("../Service_API/SERVER_request");

const RenderHome = () => {
    return renderWithProviders(<Initial />);
}

describe("INITIAL SCREEN TEST", () => {
    const Movie = MOVIES[0].results;

    beforeEach(() => {
        REQ_MOVIES_INITIAL.getMoviesInitial.mockImplementation(() => Movie);
    });

    test("Test Render Photos", async () => {
        const rendered = await RenderHome();
        expect(REQ_MOVIES_INITIAL.getMoviesInitial).toHaveBeenCalledTimes(1);
        rendered.getAllByAltText("poster movies");
    });

});