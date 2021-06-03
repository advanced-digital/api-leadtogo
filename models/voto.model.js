const mongoose = require("mongoose");

const Voto = mongoose.model(
  "Voto",
  new mongoose.Schema({
    opcao: String
  })
);

module.exports = Voto;