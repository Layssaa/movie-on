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

    const updateInfo = (response) => {
        console.log(response)

        setUser(response.user || []);
        setAddMovie(response.cart || [])
        setAddHistory(response.history || [])
        setAddWish(response.wishList || [])
    }

    // ------------------------- Login -------------------------
    const handleLogin = async (values) => {
        
        const userLogin = {
            email: values.email,
            password: values.password
        }

        await api.post("/login", { userLogin, user })
            .then(response => {

                if (response.data == 0) {
                    setAuthenticated(false);
                    return
                };
                setAuthenticated(true);
                updateInfo(response.data);
            });

        setLoading(false)
        // criar validações
    }

    // ------------------------- Logout -------------------------
    const handleLogout = async () => {
        setUser({ email: "", password: "" });
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

        // criar validações
    }

    // ------------------------- cart movie -------------------------
    const setAddMovie = async (movie) => {
        if(movie == []){
            return
        }

        setMovieOnCart((prevState) => {
            if (prevState.find((film) => film.id === movie.id)) {
                return prevState
            };
            return prevState.concat(movie);
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
    };

    const setRemoveMovie = (movie) => {
        if(movie == []){
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
        if(movie == []){
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
    };

    const setRemoveWish = (movie) => {
        if(movie == []){
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
        if(movie == []){
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
    };

    const setCleanHistory = (movie) => {
        if(movie == []){
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