const express = require("express");
const cors = require("cors");
require("./config.js");
const routes = require("./src/router");
const https = require("https");

const app = express();
app.use(cors());
routes(app);

if (process.env.ENVIROMENT === "development") {
  app.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(
      `Server is running on http://localhost:${process.env.API_PORT}`
    );
  });
} else {
  const options = {
    key: fs.readFileSync(process.env.WEB_SERVER_PRIVATE_KEY_PATH),
    cert: fs.readFileSync(process.env.WEB_SERVER_FULLCHAIN_CERT_PATH),
  };
  https
    .createServer(options, app)
    .listen(process.env.API_PORT, process.env.API_HOST, () => {
      console.log(
        `Server is running on https://${process.env.API_HOST}:${process.env.API_PORT}`
      );
    });
}

module.exports = app;
