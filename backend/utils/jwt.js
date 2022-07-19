const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/index.js");
const {
  authExpiresTimes,
  responseMessages,
  responseStatus,
} = require("../constants/expires-times.js");

function createToken(_token) {
  const token = jwt.sign({ _token }, SECRET, {
    expiresIn: authExpiresTimes.jwt_tokens,
  });

  return { token };
}

async function authenticJWT(_token) {
  if (!_token)
    return {
      auth: false,
      status: responseStatus.forbidden,
      error: responseMessages.not_token_provide,
    };

  try {
    await verifyJWT(_token);

    return {
      auth: true,
    };
  } catch (error) {
    if (error?.auth === false) {
      return {
        auth: false,
        status: error.status,
        error: error.error,
      };
    }

    return {
      auth: false,
      status: responseStatus.internal_server_error,
      error: responseMessages.internal_server_error,
    };
  }
}

async function verifyJWT(_token) {
  return new Promise((resolve, reject) => {
    jwt.verify(_token, SECRET, (err) => {
      if (err)
        reject({
          auth: false,
          status: responseStatus.forbidden,
          error: responseMessages.invalid_token,
        });

      resolve();
    });
  });
}

module.exports = { createToken, authenticJWT };
