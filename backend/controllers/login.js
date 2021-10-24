const readTheFile = require("../services/readfile");

const Login = async(req, res, next) => {
    const { userLogin } = req.body;

    let user;

    const token = new Date().getTime();
    
    let data_USER = {
        user: 0,
        cart: [],
        wishlist: [],
        history: []
    }

    readTheFile("./data/users.json")
        .then(result => {
            user = result.filter(profile => {
                return profile.email == userLogin.email && profile.password === userLogin.password
            })

            if (user.length == 0) {
                return reject([]);
            }

            data_USER.user = user[0].id;

            return result
        })
        .catch(err => err);

    const CART = await readTheFile("./data/cart.json")
        .then(result => result.filter((element) => element.delete === false && (element.id === user[0].id)))
        .catch(res => []);

    const WISHLIST = await readTheFile("./data/wishlist.json")
        .then(result => result.filter((element) => element.delete === false && (element.id === user[0].id)))
        .catch(res => []);

    const HISTORY = await readTheFile("./data/history.json")
        .then(result => result.filter((element) => (element.id === user[0].id)))
        .catch(res => []);

    const HISTORY_FILTER = HISTORY.filter(element => element.delete === false);


    data_USER = {
        ...data_USER,
        cart: CART,
        wishlist: WISHLIST,
        history: HISTORY_FILTER
    };

    // res.cookie()
    res.send(data_USER);
};

module.exports = { Login };