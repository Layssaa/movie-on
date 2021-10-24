const readTheFile = require("../src/functions/readfile");

const SignUPService = async (_data) => {
    await readTheFile("./backend/data/users.json")
        .then(result => {
            user = result.filter(profile => {
                return profile.email === userSignUp.email
            });

            if (user.length !== 0) {
                return res.send([]);
            }
            return result;
        })
        .then(result => {
            let data = result;
            userSignUp.id = data.length;
            let newList = data.concat(userSignUp);

            fs.writeFile("./backend/data/users.json", `${JSON.stringify(newList)}`, () => {
            });

            let data_USER = {
                id: userSignUp.id,
                cart: [],
                wishlist: [],
                history: []
            }
            return res.send(data_USER);
        })
        .catch(erro => res.status(500).json({ message: erro.message }))
};