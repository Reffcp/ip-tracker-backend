const express = require("express");
const ipinfo = require("ipinfo");

const app = express();
const port = 3001;

app.get("/geolocate", (req, res) => {
  const ip = req.query.ip || req.ip; // Obtener la IP del query param o del request

  ipinfo(ip, (err, cLoc) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "No se pudo obtener la información de la IP." });
    }
    res.json(cLoc);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
