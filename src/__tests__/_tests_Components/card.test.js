import React from "react";
import { render, fireEvent } from "@testing-library/dom";
import 'regenerator-runtime/runtime';
import { MOVIES } from "../../data_tets/movies";
import CardLetter from "../../Components/card/card";
import { renderWithProviders } from "../../data_tets/MyProvider/RenderMyProvider"

test("RENDER COMPONENT CARDLETTER", () => {
    const Movie = MOVIES[0].results;

    const add = jest.fn();
    const addMovie = jest.fn();
    const onclick = jest.fn();

    const RenderCard = () => {
        return renderWithProviders(<CardLetter
            key={Movie[0].id}
            movie={Movie[0]}
            add={add}
            addMovie={addMovie}
            onclick={onclick} />)
    }

    const rendered = RenderCard();

    rendered.getByText(Movie[0].title)
    fireEvent.click(rendered.getAllByAltText("Play button")[0]);


    expect(onclick).toHaveBeenCalled();
    expect(onclick).toHaveBeenCalledWith(Movie[0].id);

    fireEvent.click(rendered.getAllByAltText("Cart button")[0]);

    expect(addMovie).toHaveBeenCalledTimes(1);
    expect(addMovie).toHaveBeenCalledWith(Movie[0]);

})