import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routers } from './Router';
import { GlobalStyle } from '../Components/GlobalStyled/GlobalStyled';
import { Dashboard } from '../Components/card/card.style';
import erro from "../images/error.svg"
import { MyContext } from '../Context/Context';
import { Main } from '../Components/main/main';
import gif from "../images/gif/completed.gif";
import { Logo } from '../Components/logo/logo';

function CustomRoute(props) {
    const { authenticated, loading } = useContext(MyContext);

    if (loading) {
        return (
            <Main>
                <Logo src={gif} />
            </Main>)
    }

    if (props.isPrivate && !authenticated) {
        return <Redirect to="/login" exact />;
    }
    return <Route {...props} />;
}

function Routes() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                {routers.map((route) => {
                    return (
                        <CustomRoute key={route.name} exact path={route.path} component={route.Component} isPrivate={route.isPrivate} />)
                })}
                <Route component={() => <Dashboard> <img src={erro} /> </Dashboard>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;