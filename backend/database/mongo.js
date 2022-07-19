const mongoose = require("mongoose");
const { MONGO_HOST } = require("../config");

mongoose.connect(MONGO_HOST);

module.exports = { mongoose };
