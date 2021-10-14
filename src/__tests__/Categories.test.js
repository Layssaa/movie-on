import React from 'react';
import { CATEGORIES } from "../data_tets/categories"
import { renderWithProviders } from '../data_tets/MyProvider/RenderMyProvider';
import Categories from "../Pages/Categories/Categories"
import { REQ_MOVIES_CATEGORIES } from '../Service_API/SERVER_request';

jest.mock("../Service_API/SERVER_request");


const RenderHome = () => {
    return renderWithProviders(<Categories />);
}

describe("CATEGORIES SCREEN TEST", () => {
    const Categories = CATEGORIES.genres;

    beforeEach(() => {
        REQ_MOVIES_CATEGORIES.getCategories.mockImplementation(() => Categories);
    });

    test("TEST LIST CATEGORIES RENDER ", async () => {
        const rendered = await RenderHome();
        expect(REQ_MOVIES_CATEGORIES.getCategories).toHaveBeenCalledTimes(1);
        // rendered.getByText(Categories[0].name);
    });

});