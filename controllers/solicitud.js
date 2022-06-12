const { response } = require("express");
const Solicitud = require("../models/Solicitud");


const crearSolicitud = async (req, res = response) => {
  //const { name, justificacion , usuario } = req.body;

  try {    
    
    let solicitud;

    solicitud = new Solicitud(req.body);

    solicitud.estado = 'esperando_respuesta'

    await solicitud.save();

    
    res.status(201).json({
      ok: true,
      uid: solicitud.id      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const listAllSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.find();
    res.status(200).json({
      ok: true,
      solicitudes,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const eliminarSolicitud = async (req, res = response) => {
  const solicitudId = req.params.id;

  try {
    const soli = await Solicitud.findById(solicitudId);

    if (!soli) {
      return res.status(404).json({
        ok: false,
        msg: "Solicitud no existe por ese id",
      });
    }

    await Solicitud.findByIdAndDelete(solicitudId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

//Actualizar 
const actualizarSolicitud = async (req, res = response) => {
    const solicitudId = req.params.id;
  
    try {
      const soli = await Solicitud.findById(solicitudId);
  
      if (!soli) {
        return res.status(404).json({
          ok: false,
          msg: "Solicitud no existe por ese id",
        });
      }
  
      await Solicitud.findByIdAndUpdate(solicitudId, req.body);
  
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
    crearSolicitud,
    listAllSolicitudes,
    eliminarSolicitud,
    actualizarSolicitud

};
