const fs = require('fs');
const readTheFile = require("../src/functions/readfile");

// ------------------------------------ HISTORY - ADD  ------------------------------------
const HistoryAdd = async (req, res) => {
    const { moviesOnHistory } = req.body;
    const { user } = req.body;

    const data_USER = {
        id: user,
        data: moviesOnHistory,
        delete: false
    }

    readTheFile("./backend/data/history.json")
        .then(result => result.concat(data_USER))
        .then(result => {
            fs.writeFile("./backend/data/history.json", `${JSON.stringify(result)}`, () => {
            });

            return res.send(result);
        })
        .catch(erro => res.status(500).json({ message: erro.message }))
};

// ------------------------------------ HISTORY - REMOVE  ------------------------------------
const HistoryDelete = async (req, res) => {
    const { moviesOnHistory } = req.body;
    const { user } = req.body;

    const data_USER = {
        id: user,
        data: moviesOnHistory,
        delete: true
    }

    readTheFile("./backend/data/history.json")
        .then(result => {
            const data = result.filter((element) => element.id !== data_USER.id);
            const data_FILTER = data.concat(data_USER);

            return data_FILTER
        })
        .then(result => {
            fs.writeFile("./backend/data/history.json", `${JSON.stringify(result)}`, () => {
            });
            return res.send("history atualizado");
        })
        .catch(erro => res.status(500).json({ message: erro.message }))
};

module.exports = {
    HistoryAdd,
    HistoryDelete
}