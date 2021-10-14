import React from 'react';
import { render } from "@testing-library/react";
import 'regenerator-runtime/runtime';
import { MyContext, MyProvider } from '../Context/Context';

import WishList from '../Pages/WishList/WishList';
import { WISHLIST } from "../data_tets/data_USER/Whishlist"


describe("TEST WISHLIST SCREEN", () => {

    const wishList = WISHLIST;

    const RenderWishlist = () => {
        return render(
            <MyProvider>
                <WishList />
            </MyProvider>

            // <MyContext.Provider
            //     value={wishList}>
            //  <WishList />
            // </MyContext.Provider>
        )
    }

    // ------------------ ERRO -------------------------
    test("Render list wishlist", () => {
        const rendered = RenderWishlist();
        rendered.debug();
    })
})