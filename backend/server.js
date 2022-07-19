//----------- DEPENDÊNCIAS ------------
require("dotenv").config("../.env");
const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const PORT = 8000;
// -----------------------------------------------------------------------------------------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.join(__dirname, "/public")));
app.use(require("./routes/routes"));

// -----------------------------------------------------------------------------------------------------//
app.listen(process.env.PORT || PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
