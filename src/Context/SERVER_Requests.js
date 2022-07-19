import api from "../services/api";

export const Login_REQ = async (userLogin) => {
  return await api.post("/login", userLogin);
};

export const SingUp_REQ = async (userSignUp) => {
  return await api.post("/login/signup", userSignUp);
};

export const Cart_REQ = async (CartMovie, user, token) => {
  return await api.post("/cart", { CartMovie, user, token });
};

export const CartRemove_REQ = async (CartMovie, token) => {
  return await api.post("/cart/remove", { CartMovie, token });
};

export const WishList_REQ = async (movie, token) => {
  return await api.post("/wishList", { movie, token });
};

export const WishListRemove_REQ = async (wishlist, token) => {
  return await api.post("/wishList/remove", { wishlist, token });
};

export const History_REQ = async (history, token) => {
  return await api.post("/history", { history, token });
};

export const HistoryClear_REQ = async (token) => {
  return await api.post("/history/remove", { token });
};
