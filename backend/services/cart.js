const { systemErros } = require("../constants/errors-messages");
const {
  updateUserDataMongoDB,
  updateRemoveDataMongoDB,
} = require("../repositories/mongo");
const { getDataRedis, setDataRedis } = require("../repositories/redis");

const CartAddService = async (data) => {
  const { token, CartMovie } = data;

  try {
    const { id } = await getDataRedis(`use-${token}`);

    if (!id) throw new Error(systemErros.user_not_found);

    const {
      updated: { cart },
      error,
    } = await updateUserDataMongoDB({ cart: CartMovie }, id);

    await setDataRedis(`data::user::${token}`, {
      cart: cart,
    });

    if (error) {
      throw new Error(systemErros.an_error_occurred_while_sending);
    }

    return {
      data: cart,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const CardRemoveService = async (data) => {
  const { token, CartMovie } = data;

  try {
    const { id } = await getDataRedis(`use-${token}`);

    if (!id) throw new Error(systemErros.user_not_found);

    console.log(CartMovie);

    const { updated, error } = await updateRemoveDataMongoDB(
      { cart: CartMovie },
      id,
      "cart"
    );

    await setDataRedis(`data::user::${token}`, {
      cart: updated,
    });

    if (error) {
      throw new Error(systemErros.an_error_occurred_while_sending);
    }

    return {
      data: updated,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

module.exports = { CartAddService, CardRemoveService };
