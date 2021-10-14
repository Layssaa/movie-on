import React from "react";
import 'regenerator-runtime/runtime';
import Login from "../Pages/Login/Login";
import { renderWithProviders } from "../data_tets/MyProvider/RenderMyProvider"
import { fireEvent } from "@testing-library/dom";
import { Login_REQ } from "../Context/SERVER_Requests";
import RouteURL from "../Context/UseRouteMatch";
import { act } from "@testing-library/react";

jest.mock("../Context/SERVER_Requests");
jest.mock("../Context/UseRouteMatch");

const RenderLogin = () => {
    return renderWithProviders(<Login />);
}

describe("TEST: LOGIN SCREEN", () => {
    const user = {
        email: "Lay",
        password: 123654
    }

    const rout = {
        path: "/login", url: "login"
    }
    beforeEach(() => {
        Login_REQ.mockImplementation(() => user)
        RouteURL.mockImplementation(() => rout);
    })

    test("Render SINGUP", () => {
        const rendered = RenderLogin();

        act(() => {
            fireEvent.click(rendered.getByText("SIGN UP"));
        });

        rendered.getByPlaceholderText("Name");
        rendered.getByPlaceholderText("Email");
        rendered.getByPlaceholderText("Password");
        rendered.getByPlaceholderText("Repeat password");
        rendered.getByText("START WATCHING");
    })

    
})