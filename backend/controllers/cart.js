const fs = require('fs');
const readTheFile = require("../src/functions/readfile");

const CartAdd = async (req, res) => {
    const { CartMovie } = req.body;
    const { user } = req.body;

    const data_USER = [{
        id: user,
        data: CartMovie,
        delete: false
    }];

    readTheFile("./backend/data/cart.json")
        .then(result => result.concat(data_USER))
        .then(result => {
            fs.writeFile("./backend/data/cart.json", `${JSON.stringify(result)}`, () => {
            });
            return res.send("Carrinho atualizado");
        })
        .catch(erro => res.status(500).json({ message: erro.message }));
};

const CartRemove = async (req, res) => {
    const { CartMovie } = req.body;
    const { user } = req.body;

    const data_USER = {
        id: user,
        data: CartMovie,
        delete: true
    }

    readTheFile("./backend/data/cart.json")
        .then(result => {
            const data = result.filter((element) => {
                return element.id !== data_USER.id
            })
            return data.concat(data_USER)
        })
        .then(result => {
            fs.writeFile("./backend/data/cart.json", `${JSON.stringify(result)}`, () => {

            });
            return res.send("Carrinho atualizado");
        })
        .catch(erro => res.status(500).json({ message: erro.message }))
};

module.exports = {
    CartAdd,
    CartRemove
};