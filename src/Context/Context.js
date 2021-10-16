import React, { useEffect, useState } from "react";
import { array } from "yup";
import api from "../services/api"
import { CartRemove_REQ, Cart_REQ, HistoryClear_REQ, History_REQ, Login_REQ, SingUp_REQ, WishListRemove_REQ, WishList_REQ } from "./SERVER_Requests"

export const MyContext = React.createContext({
    id: null,
    user: null,
    moviesOnCart: [],
    moviesOnWishList: [],
    moviesOnHistory: []
});

export function MyProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(Boolean(localStorage.getItem("authentic")) || false);
    const [CartMovie, setMovieOnCart] = useState(JSON.parse(localStorage.getItem("cartMovie")) || []);
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
    const [moviesOnHistory, setMovieOnHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(0);

    useEffect(() => setLoading(false),[]);

    useEffect(() => {
        if (user === 0) {
            return
        }
        localStorage.setItem("user", JSON.stringify(user))
    }, [user]);

    useEffect(() => localStorage.setItem("cartMovie", JSON.stringify(CartMovie)), [CartMovie]);
    useEffect(() => localStorage.setItem("wishlist", JSON.stringify(wishList)), [wishList]);




    // ------------------------- Login -------------------------
    const handleLogin = async (values) => {

        const userLogin = {
            email: values.email,
            password: values.password
        };

        const response = await Login_REQ(userLogin, user);

        if (response.data.user === 0) {
            return "Usuário inválido"
        }

        if (response.data == 0) {
            setAuthenticated(false);
            return
        };

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

            const movieList = element.data;

            movieList.forEach(unity => {
                setMovieOnHistory(prevState => prevState.concat(unity));
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

        setAuthenticated(true);
        localStorage.setItem("authentic", true);
    }

    // ------------------------- Logout -------------------------
    const handleLogout = async () => {
        setUser(0);

        setAuthenticated(false);

        setMovieOnCart([])
        setWishList([])
        setMovieOnHistory([])
        setLoading([])
        setUser([])

        // localStorage.removeItem("user");
        // localStorage.removeItem("cartMovie");
        // localStorage.removeItem("wishlist");
        // localStorage.removeItem("authentic");

        localStorage.clear()

    }

    // ------------------------- Sign Up -------------------------
    const handleSignUp = async (values) => {
        const userSignUp = {
            name: values.name,
            email: values.email,
            password: values.password,
            repeatpassword: values.repeatpassword
        }

        const response = await SingUp_REQ(userSignUp)

        if (response.data.length == 0) {
            setAuthenticated(false);
            return
        };

        setAuthenticated(true);
        setUser(response.data.id);
        localStorage.setItem("authentic", true);
    }

    // ------------------------- cart movie -------------------------
    const setAddMovie = async (movie) => {

        let movieObject;

        if (!movie.length) {
            movieObject = movie
        } else {
            movieObject = movie[0]
        }

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

        const response = await Cart_REQ(CartMovie, user);
    };

    const setRemoveMovie = async (movie) => {
        if (movie == []) {
            return
        }
        setMovieOnCart((prevState) => {
            return prevState.filter((element) => element.id !== movie.id);
        });

        if (CartMovie.length == 0) {
            return
        }

        const response = await CartRemove_REQ(CartMovie, user);
    };

    const setCleanMovie = () => {
        setMovieOnCart([]);
    };

    // ------------------------- wishlist -------------------------

    const setAddWish = async (movie) => {
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
        };

        const response = await WishList_REQ(wishList, user);
    };

    const setRemoveWish = (movie) => {
        if (movie == []) {
            return
        };
        setWishList((prevState) => {
            return prevState.filter((element) => element.id !== movie.id)
        });

        if (wishList.length == 0) {
            return
        };

        const response = WishListRemove_REQ(wishList, user);

    };

    // ------------------------- history -------------------------

    const setAddHistory = async (movie) => {

        setMovieOnHistory(CartMovie);

        const response = await History_REQ(CartMovie, user);
        setCleanMovie();

    };

    const setCleanHistory = async () => {
        setMovieOnHistory([]);
        const response = await HistoryClear_REQ(moviesOnHistory, user);
    };

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