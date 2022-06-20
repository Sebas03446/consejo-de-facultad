const { Schema, model } = require("mongoose");

const SolicitudSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    justificacion: {
      type: String,
      require: true,
    },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
    estado: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Solicitud", SolicitudSchema);
