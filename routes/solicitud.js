/*
    Rutas de Solicitudes   
    host + /api/solicitudes   
*/

const { Router} = require("express");
const { listAllSolicitudes, eliminarSolicitud, actualizarSolicitud, crearSolicitud } = require("../controllers/solicitud");


const router = Router();

router.post("/new_solicitud", crearSolicitud);
router.get("/list_solicitudes", listAllSolicitudes);
router.delete("/:id", eliminarSolicitud);
router.put("/:id", actualizarSolicitud);



module.exports = router;