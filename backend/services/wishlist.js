const { systemErros } = require("../constants/errors-messages");
const {
  updateUserDataMongoDB,
  updateRemoveDataMongoDB,
} = require("../repositories/mongo");
const { getDataRedis, setDataRedis } = require("../repositories/redis");

const wishlistService = async (data) => {
  const { token, movie } = data;

  try {
    const { id } = await getDataRedis(`use-${token}`);

    if (!id) throw new Error(systemErros.user_not_found);

    movie.delete = false;

    const { updated, error } = await updateUserDataMongoDB(
      { wishlist: movie },
      id
    );

    await setDataRedis(`data::user::${token}`, {
      wishlist: updated,
    });

    if (error) {
      throw new Error(systemErros.an_error_occurred_while_sending);
    }

    return { data: updated };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const wishlistServiceRemove = async (data) => {
  const { token, wishlist } = data;

  try {
    const { id } = await getDataRedis(`use-${token}`);

    if (!id) throw new Error(systemErros.user_not_found);

    const { updated, error } = await updateRemoveDataMongoDB(
      { wishlist },
      id,
      "wishlist"
    );

    await setDataRedis(`data::user::${token}`, {
      wishlist: updated,
    });

    if (error) {
      throw new Error(systemErros.an_error_occurred_while_sending);
    }

    return { data: { updated, msg: "updated" } };
  } catch (error) {
    return { error };
  }
};

module.exports = { wishlistService, wishlistServiceRemove };
