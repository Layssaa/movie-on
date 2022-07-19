const { findUserMongoDB, insertUserMongoDB } = require("../repositories/mongo");
const { setDataRedis } = require("../repositories/redis");
const { encryptData } = require("../utils/encrypt");
const { createToken } = require("../utils/jwt");
const { responseStatus } = require("../constants/response-status");

const signUPService = async (data) => {
  const { name, email, password, repeatpassword } = data;
  console.log(data);
  try {
    if (!name || !email || !password || !repeatpassword) {
      throw new Error("Invalid data");
    }

    if (password !== repeatpassword) {
      throw new Error("Different passwords");
    }
    const result = await findUserMongoDB({ email: email });

    if (result) throw new Error("User already exists.");

    const { hash } = await encryptData(password, email);

    const insertData = await insertUserMongoDB({
      name,
      email,
      password: hash,
    });

    const { token } = await createToken(
      `${insertData?.id}:${email}:${new Date().getTime()}`
    );

    await setDataRedis(`use-${token}`, {
      id: insertData.id,
      email: email,
      token: token,
      cart: [],
      wishlist: [],
      history: [],
    });

    return {
      status: responseStatus.ok,
      userdata: {
        id: insertData.id,
        email: email,
        token: token,
        cart: [],
        wishlist: [],
        history: [],
      },
    };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { signUPService };
