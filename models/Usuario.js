const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  privilege: {
    type: String,
    require: true,
  },
  academic_degree: {
    type: String,
  },
});

module.exports = model("Usuario", UsuarioSchema);
