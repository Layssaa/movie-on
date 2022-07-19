const { responseMessages } = require("../constants/response-messages");
const { responseStatus } = require("../constants/response-status");
const { findUserMongoDB } = require("../repositories/mongo");
const { getDataRedis, setDataRedis } = require("../repositories/redis");
const { authenticateUser } = require("../utils/encrypt");
const { createToken } = require("../utils/jwt");

const loginService = async (data) => {
  const { email, password, token } = data;

  let dataUser;

  try {
    const ifUserLogged = await getDataRedis(`use-${token}`);

    if (!ifUserLogged) {
      dataUser = await findUserMongoDB({ email: email });

      const cart = dataUser.cart.filter((elem) => {
        if (!elem.delete) {
          return elem;
        }
      });

      const wishlist = dataUser.wishlist.filter((elem) => {
        if (!elem.delete) {
          return elem;
        }
      });

      const history = dataUser.history.filter((elem) => {
        if (!elem.delete) {
          return elem;
        }
      });

      if (!dataUser)
        return {
          status: responseStatus.not_found,
          error: responseMessages.user_not_found,
        };

      if (Object.keys(dataUser)?.length === 0)
        return {
          status: responseStatus.not_found,
          error: responseMessages.user_not_found,
        };

      if (!(await authenticateUser(password, email, dataUser.password)))
        return {
          status: responseStatus.forbidden,
          error: responseMessages.invalid_password,
        };

      const { token } = createToken(
        `${ifUserLogged?.id || dataUser._id}:${email}:${new Date().getTime()}`
      );

      await setDataRedis(`use-${token}`, {
        id: dataUser._id,
        email: dataUser.email,
        token: token,
        cart: dataUser.cart,
        wishlist: dataUser.wishlist,
        history: dataUser.history,
      });

      return {
        status: responseStatus.ok,
        userdata: {
          id: dataUser._id,
          email: dataUser.email,
          token: token,
          cart,
          wishlist,
          history,
        },
      };
    }

    return {
      status: responseStatus.ok,
      userdata: ifUserLogged,
    };
  } catch (error) {
    console.log(error);

    return {
      status: responseStatus.internal_server_error,
      error: responseMessages.internal_server_error,
    };
  }
};

module.exports = { loginService };
