import React, { useEffect, useState } from "react";
import { array } from "yup";
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

        const response = await api.post("/login", { userLogin, user });
        console.log("resposta server")
        console.log(response)

        if (response.data == 0) {
            setAuthenticated(false);
            return
        };

        setAuthenticated(true);
        setUser(response.data.user || []);

        response.data.cart.forEach(element => {
            if (element.length == 0) {
                return setAddMovie([]);
            }

            const movieList = element.data;

            movieList.forEach(unity => {
                setAddMovie(unity || []);
            });
        });

        response.data.history.forEach(element => {
            if (element.length == 0) {
                return setAddHistory([]);
            }

            const movieList = element.data;

            movieList.forEach(unity => {
                setAddHistory(unity || []);
            });
        });

        response.data.wishlist.forEach(element => {
            if (element.length == 0) {
                return setAddWish([]);
            }

            const movieList = element.data;

            movieList.forEach(unity => {
                setAddWish(unity || []);
            });

            setLoading(false)
        });

    }

    // ------------------------- Logout -------------------------
    const handleLogout = async () => {
        setUser({ email: "", password: "" });
        setMovieOnCart([]);
        setWishList([]);
        setMovieOnHistory([]);
        setAuthenticated(false);
    }

    // ------------------------- Sign Up -------------------------
    const handleSignUp = async (values) => {

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
                    return
                };

                setAuthenticated(true);
                setUser(response);
            });

    }

    // ------------------------- cart movie -------------------------
    const setAddMovie = async (movie) => {
        console.log("-----------MOVIE-----------------")
        // da requisição recebe um array
        // do front end recebe um objeto

        let movieObject;
        if (!movie.length) {
            console.log("é objeto")
            movieObject = movie
        } else {
            console.log("é array")
            movieObject = movie[0]
        }

        console.log(movieObject)

        if (movie == []) {
            return
        }

        setMovieOnCart((prevState) => {
            if (prevState.find((film) => film.id === movieObject.id)) {
                return prevState
            };
            return prevState.concat(movieObject);
        });

        if (CartMovie.length == 0) {
            return
        }

        api.post("/cart", { CartMovie, user })
            .then(response => {
                if (response.data.length == 0) {
                    return
                };

            });

        console.log("adicionado no carrinho")
        console.log(CartMovie)
    };

    const setRemoveMovie = (movie) => {
        if (movie == []) {
            return
        }
        setMovieOnCart((prevState) => {
            return prevState.filter((element) => element.id !== movie.id);
        });

        if (CartMovie.length == 0) {
            return
        }

        api.post("/cart/remove", { CartMovie, user })
            .then(response => {
                if (response.data.length == 0) {
                    return
                };

            });
    };

    const setCleanMovie = () => {
        setMovieOnCart([]);
    };

    // ------------------------- wishlist -------------------------

    const setAddWish = (movie) => {
        if (movie == []) {
            return
        }
        setWishList((prevState) => {
            if (prevState.find((film) => film.id === movie.id)) {
                return prevState;
            };
            return prevState.concat(movie);
        });

        if (wishList.length == 0) {
            return
        }

        api.post("/wishList", { wishList, user })
            .then(response => {
                if (response.data.length == 0) {
                    return
                };

            });
        console.log("adicionado wishList")
        console.log(wishList)
    };

    const setRemoveWish = (movie) => {
        if (movie == []) {
            return
        }
        setWishList((prevState) => {
            return prevState.filter((element) => element.id !== movie.id)
        });

        if (wishList.length == 0) {
            return
        }

        api.post("/wishList/remove", { wishList, user })
            .then(response => {
                if (response.data.length == 0) {
                    return
                };
            });
    };

    // ------------------------- history -------------------------

    const setAddHistory = (movie) => {
        if (movie == []) {
            return
        }
        setMovieOnHistory((prevState) => {
            return prevState.concat(movie);
        });

        if (moviesOnHistory.length == 0) {
            return
        }

        api.post("/history", { moviesOnHistory, user })
            .then(response => {
                if (response.data.length == 0) {
                    return
                };

            });

        console.log("adicionado history")
        console.log(moviesOnHistory)
    };

    const setCleanHistory = (movie) => {
        if (movie == []) {
            return
        }

        setMovieOnHistory([]);

        if (moviesOnHistory.length == 0) {
            return
        }

        api.post("/history/remove", { moviesOnHistory, user })
            .then(response => {
                if (response.data.length == 0) {
                    return
                };

            });
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
                handleLogout,
                handleSignUp,
                authenticated,
                setAuthenticated,

                loading
            }}
        >
            {children}
        </MyContext.Provider>
    );
};