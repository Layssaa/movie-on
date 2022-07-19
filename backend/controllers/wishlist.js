const { wishlistService, wishlistServiceRemove } = require("../services/wishlist");

// ------------------------------------ WISHLIST - ADD  ------------------------------------
const WishlistAdd = async (req, res) => {
  try {
    const { data, error } = await wishlistService(req.body);

    if (error) throw new Error(error);

    res.send({ msg: data.msg, data });
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message, status: 401 });
  }
};

// ------------------------------------ WISHLIST - REMOVE  ------------------------------------
const WishlistRemove = async (req, res) => {
  try {
    const { data, error } = await wishlistServiceRemove(req.body);

    if (error) throw new Error(error);

    res.send({ msg: data.msg, data });
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message, status: 401 });
  }
};

module.exports = {
  WishlistAdd,
  WishlistRemove,
};
