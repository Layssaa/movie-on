import React from 'react';
import 'regenerator-runtime/runtime';
import Cart from '../Pages/Cart/Cart';
import { renderWithProviders } from '../data_tets/MyProvider/RenderMyProvider';

const RenderCart = () => {
    return renderWithProviders(<Cart />);
}

describe("TEST CART SCREEN", () => {

    test("Render List Cart", () => {
        const rendered = RenderCart();
        rendered.findByText("Vazio");
    })
})