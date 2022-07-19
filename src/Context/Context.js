import React, { useEffect, useState } from "react";
import {
  CartRemove_REQ,
  Cart_REQ,
  HistoryClear_REQ,
  History_REQ,
  Login_REQ,
  SingUp_REQ,
  WishListRemove_REQ,
  WishList_REQ,
} from "./SERVER_Requests";

export const MyContext = React.createContext({
  id: null,
  user: null,
  moviesOnCart: [],
  moviesOnWishList: [],
  moviesOnHistory: [],
});

export function MyProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(
    Boolean(localStorage.getItem("authentic")) || false
  );
  const [CartMovie, setMovieOnCart] = useState(
    JSON.parse(localStorage.getItem("cartMovie")) || []
  );
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [moviesOnHistory, setMovieOnHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(0);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );

  useEffect(() => setLoading(false), []);
  useEffect(
    () => localStorage.setItem("token", JSON.stringify(token)),
    [token]
  );

  useEffect(() => {
    if (user === 0) {
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(
    () => localStorage.setItem("cartMovie", JSON.stringify(CartMovie)),
    [CartMovie]
  );
  useEffect(
    () => localStorage.setItem("wishlist", JSON.stringify(wishList)),
    [wishList]
  );

  // ------------------------- Login -------------------------
  const handleLogin = async (values) => {
    const response = await Login_REQ({
      email: values.email,
      password: values.password,
      user,
      token,
    });
    const data = response.data.userdata;

    if (!data || !data.id) {
      setAuthenticated(false);
      return;
    }

    setUser(data.id);
    setMovieOnCart(data.cart || []);
    setMovieOnHistory(data.history || []);
    setWishList(data.wishlist || []);
   





    setAuthenticated(true);
    localStorage.setItem("authentic", true);
    // localStorage.setItem("token", data.token);
    setToken(data.token);
  };

  // ------------------------- Logout -------------------------
  const handleLogout = async () => {
    setUser(0);

    setAuthenticated(false);

    setMovieOnCart([]);
    setWishList([]);
    setMovieOnHistory([]);
    setLoading([]);
    setUser([]);
    setLoading(false);
    setToken("");

    localStorage.clear();
  };

  // ------------------------- Sign Up -------------------------
  const handleSignUp = async (values) => {
    const response = await SingUp_REQ({
      name: values.name,
      email: values.email,
      password: values.password,
      repeatpassword: values.repeatpassword,
    });

    if (response.data.error && response.data.status === 401) {
      return { error: response.data.error };
    }

    if (!response.data.id || !response.data.token) {
      setAuthenticated(false);
      return;
    }

    setAuthenticated(true);
    setUser(response.data.id);
    localStorage.setItem("authentic", true);
    // localStorage.setItem("token", response.data.token);

    setToken(response.data.token);
    return { error: false };
  };

  // ------------------------- cart movie -------------------------
  const setAddMovie = async (movie) => {
    const { data, error } = await Cart_REQ(movie, user, token);

    if (error)
      throw new Error("Não foi possível adicionar o filme ao carrinho");

    setMovieOnCart((prevState) => {
      if (prevState.find((film) => film.id === data.id)) {
        return prevState;
      }
      return prevState.concat(movie);
    });

  };

  const setRemoveMovie = async (movie) => {
    if (movie == []) {
      return;
    }
    setMovieOnCart((prevState) => {
      return prevState.filter((element) => element.id !== movie.id);
    });

    if (CartMovie.length == 0) {
      return;
    }

     await CartRemove_REQ(movie, token);
  };

  const setCleanMovie = () => {
    setMovieOnCart([]);
  };

  // ------------------------- wishlist -------------------------

  const setAddWish = async (movie) => {
    const { data, error } = await WishList_REQ(movie, token);
    if (error)
      throw new Error("Não foi possível adicionar o filme a lista de desejo");

    setWishList((prevState) => {
      if (prevState.find((film) => film.id === data.id)) {
        return prevState;
      }
      return prevState.concat(movie);
    });
  };

  const setRemoveWish = (movie) => {
    if (movie == []) {
      return;
    }
    WishListRemove_REQ(movie, token);
    setWishList((prevState) => {
      return prevState.filter((element) => element.id !== movie.id);
    });

    if (wishList.length == 0) {
      return;
    }
  };

  // ------------------------- history -------------------------

  const setAddHistory = async () => {
    const { error } = await History_REQ(CartMovie, token);
    if (error) throw new Error("Não foi possível salvar o histórico");
    setCleanMovie();
    setMovieOnHistory(CartMovie);
  };

  const setCleanHistory = async () => {
    setMovieOnHistory([]);
    await HistoryClear_REQ(token);
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

        loading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
