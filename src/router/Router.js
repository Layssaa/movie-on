import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import WishList from "../Pages/WishList/WishList";
import History from "../Pages/History/History";
import Cart from "../Pages/Cart/Cart";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Login from "../Pages/Login/Login";
import Initial from "../Pages/Initial/Initial";
import CategorieList from "../Pages/categorieList/CategorieList";
import Finished from "../Pages/orderplaced/orderPlaced";

export const routers = [ 
    {
        name: "categorie",
        Component: CategorieList,
        path: "/categories/:name",
        isVisible: false,
        isPrivate: true

    },
    {
        name: "details",
        Component: SingleProduct,
        path: "/movie/:id",
        isVisible: false,
        isPrivate: true
    },
    {
        name: "finished",
        Component: Finished,
        path: "/finished",
        isVisible: false,
        isPrivate: true
    },
    {
        name: "login",
        Component: Login,
        path: "/login",
        isVisible: false,
        isPrivate: false
    },
    {
        name: "cart",
        Component: Cart,
        path: "/cart",
        isVisible: false,
        isPrivate: true
    },
    {
        name: "history",
        Component: History,
        path: "/history",
        isVisible: true,
        isPrivate: true
    },
    {
        name: "wishlist",
        Component: WishList,
        path: "/wishlist",
        isVisible: true,
        isPrivate: true
    },
    {
        name: "categories",
        Component: Categories,
        path: "/categories",
        isVisible: true,
        isPrivate: true
    },
    {
        name: "home",
        Component: Home,
        path: "/home",
        isVisible: true,
        isPrivate: true
    },
    {
        name: "initial",
        Component: Initial,
        path: "/",
        isVisible: false,
        isPrivate: false

    }
];