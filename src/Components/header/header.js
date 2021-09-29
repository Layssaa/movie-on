import { routers } from "../../router/Router";
import { SecondaryLogo } from '../../Components/logo/logo';
import { HeaderHome, Cart, Profile } from "./headerStyle";
import Search from "../search/Search";
import img from "../../images/small.png"
import imgProfile from "../../images/user.png"
import { useHistory } from "react-router-dom";

export default function Header() {
    const history = useHistory();

    const goHome = ()=>{
        history.push("/");
    };

    const goCart = ()=>{
        history.push("/cart");
    };

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
                <Profile src={imgProfile} />
            </HeaderHome>
        </>
    );
};