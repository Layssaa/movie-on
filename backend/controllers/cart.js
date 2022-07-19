const { CartAddService, CardRemoveService } = require("../services/cart");

const CartAdd = async (req, res) => {
  try {
    const { data, error } = await CartAddService(req.body);

    if (error) throw new Error(error);

    res.send({ data });
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message, status: 401 });
  }
};

const CartRemove = async (req, res) => {
  try {
    const { data, error } = await CardRemoveService(req.body);

    if (error) throw new Error(error);

    res.send({ msg: data.msg, data });
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message, status: 401 });
  }
};

module.exports = {
  CartAdd,
  CartRemove,
};
