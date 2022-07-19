const { historyAddService, historyClearService } = require("../services/history");

// ------------------------------------ HISTORY - ADD  ------------------------------------
const HistoryAdd = async (req, res) => {
  try {
    const { data, error } = await historyAddService(req.body);

    if (error) throw new Error(error);

    res.send({ msg: data.msg, data });
  } catch (error) {
    res.send({ msg: error.message, status: 401 });
  }
};

// ------------------------------------ HISTORY - REMOVE  ------------------------------------
const HistoryDelete = async (req, res) => {
  try {
    const { data, error } = await historyClearService(req.body);

    if (error) throw new Error(error);

    res.send({ msg: data.msg, data });
  } catch (error) {
    res.send({ msg: error.message, status: 401 });
  }
};

module.exports = {
  HistoryAdd,
  HistoryDelete,
};
