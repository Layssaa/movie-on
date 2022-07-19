const { responseMessages } = require("../constants/response-messages");
const { responseStatus } = require("../constants/response-status");
const { loginService } = require("../services/login");

const Login = async (req, res) => {
  try {
    const { status, userdata, error } = await loginService(req.body);

    if (status !== responseStatus.ok) {
      res.status(status).send({ error });
    } else {
      res.status(status).send({ userdata });
    }
  } catch (error) {
   
    res
      .status(responseStatus.internal_server_error)
      .send({ error: responseMessages.internal_server_error });
  }
};

module.exports = { Login };
