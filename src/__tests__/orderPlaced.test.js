import React from 'react';
import 'regenerator-runtime/runtime';
import Finished from "../Pages/orderplaced/orderPlaced";
import { renderWithProviders } from "../data_tets/MyProvider/RenderMyProvider"
import { act, fireEvent } from '@testing-library/react';

const RenderPlacedOrder = () => {
    return renderWithProviders(<Finished />);
}

describe("ORDER PLACED SCREEN", () => {

    test("Finalized", async () => {
        const rendered = RenderPlacedOrder();
        rendered.getByText("Thank you for your request, we will send a proof of purchase with more information to your e-mail.");
        rendered.getByText("BACK TO THE CATALOG");
   
    });

    test("Test BACK TO CATALOG",()=>{
        const rendered = RenderPlacedOrder();

        // act(async() => {
        //     fireEvent.click(await rendered.findByText("BACK TO THE CATALOG"));
        // });
    })

})