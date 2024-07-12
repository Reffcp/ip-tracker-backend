const geolocate_router = require("../components/geolocate/network");
const MAIN_ROUTE = "/api/v1";

const routes = (app) => {
  app.use(MAIN_ROUTE + "/geolocate", geolocate_router);
};

module.exports = routes;
