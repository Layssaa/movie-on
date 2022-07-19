const { redisClient } = require("../database/redis");

const getDataRedis = async (_search) => {
  return JSON.parse(await redisClient.get(_search));
};

const setDataRedis = async (_key, _send) => {
  return await redisClient.set(_key, JSON.stringify(_send));
};

const setDataWithTimestamp = async (_key, _send, _time) => {
  return await redisClient.set(_key, JSON.stringify(_send), "EX", _time);
};

const setSessionRedis = async (_key, _send) => {
  return await redisClient.set(_key, JSON.stringify(_send), "EX", 3600);
};

const deleteSessionRedis = async (_key) => {
  return await redisClient.del(_key);
};

module.exports = {
  getDataRedis,
  setDataRedis,
  setDataWithTimestamp,
  setSessionRedis,
  deleteSessionRedis,
};
