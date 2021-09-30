import React, { useEffect, useState } from "react";
import api from "../services/api"

export const MyContext = React.createContext({
    id: null,
    user: null,
    moviesOnCart: [],
    moviesOnWishList: [],
    moviesOnHistory: []
});

export function MyProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [CartMovie, setMovieOnCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [moviesOnHistory, setMovieOnHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({ email: "", password: "" });

    useEffect(() => setLoading(false));

    // ------------------------- Login -------------------------
    const handleLogin = async (values) => {
        const userLogin = {
            email: values.email,
            password: values.password
        }

        await api.post("/login", { userLogin })
            .then(response => {

                if (response.data.length == 0) {
                    setAuthenticated(false);
                    return console.log("não tem");
                };

                console.log("tem");
                setAuthenticated(true);
                setUser(response);
            });

        setLoading(false)

        // criar validações
        // chamar no button do login/signup
    }

    // ------------------------- Logout -------------------------
    const handleLogout = async () => {
        setUser({ email: "", password: "" });
        setAuthenticated(false);
    }

    // ------------------------- Sign Up -------------------------
    const handleSignUp = async (values) => {
        console.log(values);

        const userSignUp = {
            name: values.name,
            email: values.email,
            password: values.password,
            repeatpassword: values.repeatpassword
        }

        await api.post("/login/signup", { userSignUp })
            .then(response => {
                if (response.data.length == 0) {
                    setAuthenticated(false);
                    return console.log("não tem");
                };

                console.log("tem");
                setAuthenticated(true);
                setUser(response);
            });

        // criar validações
        // chamar no button do login/signup
    }

    // ------------------------- cart movie -------------------------
    const setAddMovie = (movie) => {
        setMovieOnCart((prevState) => {
            if (prevState.find((film) => film.id === movie.id)) {
                return prevState
            };
            return prevState.concat(movie);
        });
    };

    const setRemoveMovie = (movie) => {
        setMovieOnCart((prevState) => {
            return prevState.filter((element) => element.id !== movie.id);
        });
    };

    const setCleanMovie = () => {
        setMovieOnCart([]);
    };
    // ------------------------- wishlist -------------------------

    const setAddWish = (movie) => {
        setWishList((prevState) => {
            if (prevState.find((film) => film.id === movie.id)) {
                return prevState;
            };
            return prevState.concat(movie);
        });
    };

    const setRemoveWish = (movie) => {
        setWishList((prevState) => {
            return prevState.filter((element) => element.id !== movie.id)
        });
    };

    // ------------------------- history -------------------------

    const setAddHistory = (movie) => {
        setMovieOnHistory((prevState) => {
            return prevState.concat(movie);
        });
    };

    const setCleanHistory = (movie) => {
        setMovieOnHistory([]);
    }

    return (
        <MyContext.Provider
            value={{
                CartMovie,
                setAddMovie,
                setRemoveMovie,
                setCleanMovie,

                wishList,
                setAddWish,
                setRemoveWish,

                moviesOnHistory,
                setAddHistory,
                setCleanHistory,

                user: null,

                handleLogin,
                handleSignUp,
                authenticated,

                loading
            }}
        >
            {children}
        </MyContext.Provider>
    );
};