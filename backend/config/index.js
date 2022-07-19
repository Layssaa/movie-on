require("dotenv").config("../.env");

const SECRET = process.env.SECRET;
const MONGO_HOST = process.env.MONGO_HOST;

module.exports = { SECRET, MONGO_HOST };
