const fs = require('fs');
const readTheFile = require("../services/readfile");

// ------------------------------------ WISHLIST - ADD  ------------------------------------
const Wishlist = async (req, res) => {
    const { wishList } = req.body;
    const { user } = req.body;

    const data_USER = {
        id: user,
        data: wishList,
        delete: false
    }

    readTheFile("./backend/data/wishlist.json")
        .then(result => result.concat(data_USER))
        .then(result => {
            fs.writeFile("./backend/data/wishlist.json", `${JSON.stringify(result)}`, () => {

            });
            return res.send("wishList atualizada");
        })
        .catch(erro => res.status(500).json({ message: erro.message }))
};


// ------------------------------------ WISHLIST - REMOVE  ------------------------------------
const WishlistRemove = async (req, res) => {
    const { wishList } = req.body;
    const { user } = req.body;

    const data_USER = {
        id: user,
        data: wishList,
        delete: true
    }

    readTheFile("./backend/data/wishlist.json")
        .then(result => {
            const data = result.filter((element) => {
                return element.id !== data_USER.id
            })
            return data.concat(data_USER)
        })
        .then(result => {
            fs.writeFile("./backend/data/wishlist.json", `${JSON.stringify(result)}`, () => {

            });
            return res.send("wishlist atualizado");
        })
        .catch(erro => res.status(500).json({ message: erro.message }))
};


module.exports ={
    Wishlist,
    WishlistRemove
}