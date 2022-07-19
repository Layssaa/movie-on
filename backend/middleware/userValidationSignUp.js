const userValidationSignUp = (req, res, next) => {
  const { name, email, password, repeatpassword } = req.body;
  try {
    if (!name || !email || !password || !repeatpassword) {
      res.send({ msg: "Invalid data", error: 400 });
    }

    if (password !== repeatpassword) {
      throw Error("Different passwords");
    }

    next();
  } catch (err) {
    console.log("err");
    res.send({ status: 401, error: err.message }).status(401);
  }
};

module.exports = { userValidationSignUp };
