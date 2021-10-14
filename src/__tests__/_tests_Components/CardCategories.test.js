import React from 'react';
import { renderWithProviders } from "../../data_tets/MyProvider/RenderMyProvider";
import { CATEGORIES } from "../../data_tets/categories"
import { fireEvent } from "@testing-library/dom";
import CardCategories from "../../Components/card/cardCategories";
import Categories from "../../Pages/Categories/Categories";
import { act } from '@testing-library/react';

test("TEST CARD CATEGORIES LIST", () => {

    const Categorie = CATEGORIES.genres;
    const onclick = jest.fn();

    const RenderCard = () => {
        return renderWithProviders(
            <Categories>
                <CardCategories
                    value={Categorie[0].id}
                    key={Categorie[0].id}
                    id={Categorie[0].id}
                    categorie={Categorie[0].name}
                    onclick={onclick}>
                    <p>{Categorie[0].name}</p>
                </CardCategories>
            </Categories>

        )
    };

    const rendered = RenderCard();
    rendered.findByText(Categorie[0].name)

    act(async()=>{
        fireEvent.click( await rendered.findByText(Categorie[0].name));
        fireEvent.click(await rendered.findAllByAltText("icon that symbolizes categories")[0]);
    });
   
    // expect(onclick).toHaveBeenCalled();
    // expect(onclick).toHaveBeenCalledWith(Categorie[0].id);
});
