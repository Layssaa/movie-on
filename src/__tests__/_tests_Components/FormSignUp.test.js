import React from "react";
import 'regenerator-runtime/runtime';
import FormRegister from "../../Components/form/FormRegister";
import { renderWithProviders } from "../../data_tets/MyProvider/RenderMyProvider"
import { fireEvent } from "@testing-library/dom";
import { SingUp_REQ } from "../../Context/SERVER_Requests";
import RouteURL from "../../Context/UseRouteMatch";
import { act } from "@testing-library/react";
import Login from "../../Pages/Login/Login";

jest.mock("../../Context/SERVER_Requests");
jest.mock("../../Context/UseRouteMatch");


describe("TRY LOGIN TEST", () => {
    const user = {
        name: "Lay",
        email: "Lay",
        password: 123654,
        repeatpassword: 123654
    };   

    const rout = {
        path: "/login/signup", url: "/login/signup"
    };

    const history = jest.fn();
    const getHome = jest.fn();

    beforeEach(() => {
        SingUp_REQ.mockImplementation(() => user)
        RouteURL.mockImplementation(() => rout);
    })

    const RenderFormSingup = () => {
        return renderWithProviders(
            <Login>
                <FormRegister history={history} onclick={getHome} />
            </Login>);
    }

    test("CLICK BUTTON LOGIN", async () => {
        const rendered = await RenderFormSingup();

        rendered.findByPlaceholderText("Name");
        rendered.findByPlaceholderText("Email");
        rendered.findByPlaceholderText("Password");
        rendered.findByPlaceholderText("Repeat password");
        rendered.findByText("START WATCHING");

        act(async() => {
            fireEvent.click(await rendered.findByText("START WATCHING"));
        });
       
    })

})