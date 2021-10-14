import React from 'react';
import { render } from "@testing-library/react";
import 'regenerator-runtime/runtime';
import { MyContext } from '../../Context/Context';

import { Login_REQ, SingUp_REQ, Cart_REQ, CartRemove_REQ, WishList_REQ, WishListRemove_REQ, History_REQ, HistoryClear_REQ } from '../../Context/SERVER_Requests';
import { userLogin } from "../../data_tets/data_USER/User";
import { userRegister } from '../../data_tets/data_USER/User_Register';
import { HISTORY } from "../../data_tets/data_USER/History"
import Home from "../../Pages/Home/Home";

jest.mock("../../Context/SERVER_Requests");

describe("Test CONTEXT", () => {

    const value = jest.fn();

    beforeAll(() => {
        Login_REQ.mockImplementation(() => userLogin);
        SingUp_REQ.mockImplementation(() => userRegister);
        Cart_REQ.mockImplementation(() => "Carrinho atualizado");
        CartRemove_REQ.mockImplementation(() => "Carrinho atualizado");
        WishList_REQ.mockImplementation(() => "wishList atualizada");
        WishListRemove_REQ.mockImplementation(() => "wishlist atualizado");
        History_REQ.mockImplementation(() => HISTORY);
        HistoryClear_REQ.mockImplementation(() => "history atualizado");
    });

    const RenderContext = (component) => {
        return render(
            <MyContext.Provider value={value}>{component}</MyContext.Provider>
        )
    }

    test("Render Context", () => {
        const rendered = RenderContext(Home);
        rendered.debug();
    });
})
