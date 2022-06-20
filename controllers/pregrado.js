const { response } = require("express");
const Pregrado = require("../models/Pregrado");

const crearPregrado = async (req, res = response) => {
  try {
    const pregrado = new Pregrado(req.body);
    await pregrado.save();

    res.status(201).json({
      ok: true,
      pregrado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const listAllPregrados = async (req, res) => {
  try {
    const pregrados = await Pregrado.find();
    res.status(200).json({
      ok: true,
      pregrados,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const eliminarPregrado = async (req, res = response) => {
  const pregradoId = req.params.id;

  try {
    const pregrado = await Pregrado.findById(pregradoId);

    if (!pregrado) {
      return res.status(404).json({
        ok: false,
        msg: "Pregrado no existe por ese id",
      });
    }

    await Pregrado.findByIdAndDelete(pregradoId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  crearPregrado,
  listAllPregrados,
  eliminarPregrado,
};
