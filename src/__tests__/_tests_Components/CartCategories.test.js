import React from "react";
import { fireEvent } from "@testing-library/dom";
import { renderWithProviders } from "../../data_tets/MyProvider/RenderMyProvider";
import 'regenerator-runtime/runtime';

import { CATEGORIES } from "../../data_tets/categories"

import CardCategories from "../../Components/card/cardCategories"
import Categories from "../../Pages/Categories/Categories"
import { REQ_MOVIES_CATEGORIES } from '../../Service_API/SERVER_request';
import { act } from "@testing-library/react";


jest.mock("../../Service_API/SERVER_request");

describe("Card Test", () => {

    const categorie = CATEGORIES.genres[0];
    const onclick = jest.fn();

    beforeAll(() => {
        REQ_MOVIES_CATEGORIES.getCategories.mockImplementation(() => CATEGORIES.genres)
    })

    const RenderCategorieCard = () => {
        return renderWithProviders(
            <Categories>
                <CardCategories
                    value={categorie.id}
                    onclick={onclick}
                    id={categorie.id}
                    key={categorie.name}
                    categorie={categorie.name}
                >
                    <p>{categorie.name}</p>
                </CardCategories>
            </Categories>
        );
    }

    test("Test categorie card", () => {
        const rendered = RenderCategorieCard();
        rendered.findByText(categorie.name)
        rendered.findByAltText("icon that symbolizes categories")

        act(async () => {
            fireEvent.click(await rendered.findByText(categorie.name));
        });
    })


})