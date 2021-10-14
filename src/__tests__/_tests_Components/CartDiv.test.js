import React from "react";
import { render, fireEvent } from "@testing-library/dom";
import 'regenerator-runtime/runtime';

import CartDiv from "../../Components/card/cardCart";
import Cart from "../../Pages/Cart/Cart";
import { MOVIES } from "../../data_tets/movies";
import { renderWithProviders } from "../../data_tets/MyProvider/RenderMyProvider";
import { act } from "@testing-library/react";

describe("Test Cart", ()=>{
    const removeMovie = jest.fn();
    const movie = MOVIES[0].results[0];

    const RenderCart = () => {
        return renderWithProviders(
        <Cart>
            <CartDiv
                key={movie.id}
                removeMovie={removeMovie}
                movie={movie}
            />
        </Cart>);
    }

    test("Cart rendered", ()=>{
        const rendered = RenderCart();
        rendered.findByText(movie.title);
    })

    test("Trash", ()=>{
        const rendered = RenderCart();
        act(async() => {
            fireEvent.click(await rendered.findAllByAltText("trash"));
        });
    })
})