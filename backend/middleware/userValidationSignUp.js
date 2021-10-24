const { modalUnstyledClasses } = require("@material-ui/unstyled");

const userValidationSignUp = (req, res, next) => {
    const { name, email, password, repeatpassword } = req.body;
    try {
        if (!name || !email || !password || !repeatpassword) {
            throw new Error("Invalid data")
        }

        if (password !== repeatpassword) {
            throw new Error("Different passwords")
        }

        next();
    }
    catch (err) {
        res.json(err.message)
    }

}

module.exports = { userValidationSignUp };