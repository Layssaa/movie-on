const { signUPService } = require("../services/signup");

// ------------------------------------ SIGNUP - REGISTER - USER ------------------------------------
const SignUP = async (req, res) => {
  try {
    const { userdata, error } = await signUPService(req.body);

    if (error) throw new Error(error);
    res.status(200).send(userdata);
  } catch (error) {
    res.status(200).send({ status: 401, error: error.message });
  }
};

module.exports = {
  SignUP,
};
