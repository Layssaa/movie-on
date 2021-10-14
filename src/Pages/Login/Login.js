import { Main } from "../../Components/main/main";
import Footer from "../../Components/Footer/Footer";
import { Head, Form } from "../../Components/form/Form";
import { Wallpaper } from "../../Components/wallpaper/wallpaper";
import FormLogin from "../../Components/form/FormLogin";
import FormRegister from "../../Components/form/FormRegister";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { BrowserRouter, useRouteMatch, Link, Switch, Route } from "react-router-dom";
import { Logo } from "../../Components/logo/logo";
import img from "../../images/Logo-main.png";
import RouteURL from "../../Context/UseRouteMatch";

export default function Login() {
    const [control, setControl] = useState(0);

    const routerUser = () => {
        if (control === 0) {
            setControl(1);
            return true;
        } else {
            setControl(0);
            return false;
        };
    };

    const history = useHistory();
    const getHome = () => {
        history.push("/home");
    };

    const { path, url } =  RouteURL();

    return (
        <Main>
            <Wallpaper />

            <Logo src={img} />

            <Form className="form">
                <BrowserRouter>
                    <Head className="head">
                        <Link to={`${url}/signup`}> <span onClick={routerUser}>SIGN UP</span> </Link>
                        <Link to={`${url}`}> <span onClick={routerUser}>LOGIN</span> </Link>
                    </Head>

                    <Switch>
                        <Route path={`${path}/signup`} >
                            <FormRegister history={history} onclick={getHome} />
                        </Route >
                        <Route exact path={path}>
                            <FormLogin history={history} onclick={getHome} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Form>

            <Footer />
        </Main >
    );
};