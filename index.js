const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const routes = require("./src/router");
routes(app);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Servidor escuchando en http://${process.env.HOST}:${process.env.PORT}`
  );
});

module.exports = app;
