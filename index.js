const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const routes = require("./src/router");
routes(app);

const port = 3001;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;
