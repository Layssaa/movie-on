import { routers } from "../../router/Router";
import { SecondaryLogo } from '../../Components/logo/logo';
import { HeaderHome, Cart, Profile, Quit } from "./headerStyle";
import Search from "../search/Search";
import img from "../../images/small.png"
import imgProfile from "../../images/profile.png"
import { useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";

export default function Header() {
    const { handleLogout } = useContext(MyContext);
    const history = useHistory();
    const [display, setDisplay] = useState(false);

    const goHome = () => {
        history.push("/home");
    };

    const goCart = () => {
        history.push("/cart");
    };

    const getOut = () => {
        if (display) {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }

    const Exit = () => {
        handleLogout()
        setDisplay(false)
    }

    return (
        <>
            <HeaderHome>
                <SecondaryLogo onClick={goHome} />
                {routers
                    .filter((element) => element.isVisible)
                    .reverse()
                    .map((element) => {
                        const changePage = () => {
                            history.push(element.path);
                        };
                        return (
                            <p onClick={changePage} key={element.name}>{element.name}</p>
                        );
                    })}
                <Search />
                <Cart onClick={goCart} src={img} />
                <Profile onClick={getOut} src={imgProfile} />
                <Quit onClick={Exit} open={display}>QUIT</Quit>
            </HeaderHome>
        </>
    );
};