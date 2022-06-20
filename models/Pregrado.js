const { Schema, model } = require("mongoose");

const PregradoSchema = Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = model("Pregrado", PregradoSchema);
