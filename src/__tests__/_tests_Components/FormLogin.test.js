import React from "react";
import 'regenerator-runtime/runtime';
import FormLogin from "../../Components/form/FormLogin";
import { renderWithProviders } from "../../data_tets/MyProvider/RenderMyProvider"
import { fireEvent } from "@testing-library/dom";
import { Login_REQ } from "../../Context/SERVER_Requests";
import RouteURL from "../../Context/UseRouteMatch";
import { act } from "@testing-library/react";
import Login from "../../Pages/Login/Login";

jest.mock("../../Context/SERVER_Requests");
jest.mock("../../Context/UseRouteMatch");


describe("TRY LOGIN TEST", () => {
    const user = {
        email: "Lay",
        password: 123654
    }

    const history = jest.fn();
    const getHome = jest.fn();

    beforeEach(() => {
        Login_REQ.mockImplementation(() => user);
        RouteURL.mockImplementation(() => "/")
    });

    const RenderFormLogin = () => {
        return renderWithProviders(
            <Login>
                <FormLogin history={history} onclick={getHome} />
            </Login>);
    }

    test("CLICK BUTTON LOGIN", () => {
        const rendered = RenderFormLogin();

        act(() => {
            fireEvent.click(rendered.getByText("START WATCHING"));
        });
        
    })

})