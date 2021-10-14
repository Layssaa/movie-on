import api from "../services/api"

export const Login_REQ = async (userLogin, user) => {
    return await api.post("/login", { userLogin, user });
}

export const SingUp_REQ = async (userSignUp) => {
    return await api.post("/login/signup", { userSignUp });
}

export const Cart_REQ = async (CartMovie, user) => {
    return await api.post("/cart", { CartMovie, user });
}

export const CartRemove_REQ = async (CartMovie, user) => {
    return await api.post("/cart/remove", { CartMovie, user });
}

export const WishList_REQ = async (wishList, user) => {
    return await api.post("/wishList", { wishList, user });
}

export const WishListRemove_REQ = async (wishList, user) => {
    return await api.post("/wishList/remove", { wishList, user });
}

export const History_REQ = async (moviesOnHistory, user) => {
    return await api.post("/history", { moviesOnHistory, user });
}

export const HistoryClear_REQ = async (moviesOnHistory, user) => {
    return await api.post("/history/remove", { moviesOnHistory, user });
}

