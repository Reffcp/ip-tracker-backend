const ipinfo = require("ipinfo");

const getGeolocate = async (req, res) => {
  // Definir el controlador de la ruta
  const ip = req.query.ip || req.ip; // Obtener la IP del query param o del request

  ipinfo(ip, (err, cLoc) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "No se pudo obtener la información de la IP." });
    }
    res.json(cLoc);
  });
};

module.exports = {
  getGeolocate,
};
