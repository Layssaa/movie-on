const { systemErros } = require("../constants/errors-messages");
const { updateUserDataMongoDB, deleteHistoryMongo } = require("../repositories/mongo");
const { getDataRedis, setDataRedis } = require("../repositories/redis");

const historyAddService = async (data) => {
  const { token, history } = data;

  try {
    const { id } = await getDataRedis(`use-${token}`);

    if (!id) throw new Error(systemErros.user_not_found);

    let history_values = {};

    history.forEach((elem) => {
      elem.delete = false;
      history_values = {
        ...history_values,
        ...elem,
      };
    });

    const { updated, error } = await updateUserDataMongoDB(
      { history: history_values },
      id
    );

    await setDataRedis(`data::user::${token}`, {
      cart: updated,
    });

    if (error) {
      throw new Error(systemErros.an_error_occurred_while_sending);
    }

    return {
      data: "updated",
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const historyClearService = async (data) => {
  const { token } = data;

  try {
    const { id } = await getDataRedis(`use-${token}`);

    if (!id) throw new Error(systemErros.user_not_found);

    const { updated, error } = await deleteHistoryMongo(
      id,
      "history"
    );

    await setDataRedis(`data::user::${token}`, {
      history: updated,
    });

    if (error) {
      throw new Error(systemErros.an_error_occurred_while_sending);
    }

    return {
      data: "history deleted",
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

module.exports = { historyAddService, historyClearService };
