const controller = require("../controllers/voto.controller");

module.exports = function(app) {
  app.post("/api/voto", controller.createVoto);
  app.get("/api/resultadoVotos", controller.getResultadoVotos);
};