const routes = require('express').Router();

const { CartAdd, CartRemove } = require('../controllers/cart');
const { HistoryAdd, HistoryDelete } = require('../controllers/history');
const { Login } = require('../controllers/login');
const { SignUP } = require('../controllers/signup');
const { Wishlist, WishlistRemove } = require('../controllers/wishist');
const { userValidationSignUp } = require("../middleware/userValidationSignUp")

// --------- route login -------------
routes.post('/login', Login);

// --------- route signup -------------
routes.use("/login/signup", userValidationSignUp, SignUP);

// --------- route cart -------------
routes.post("/cart", CartAdd);
routes.post("/cart/remove", CartRemove);

// --------- route history -------------
routes.post("/history", HistoryAdd);
routes.post("/history/remove", HistoryDelete);

// --------- route wishilist -------------
routes.post("/wishList", Wishlist);
routes.post("/wishList/remove", WishlistRemove);

// --------- route wishilist -------------
routes.post("/wishList", Wishlist);
routes.post("/wishList/remove", WishlistRemove);

module.exports = routes;