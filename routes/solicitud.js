/*
    Rutas de Solicitudes   
    host + /api/solicitudes   
*/

const { Router } = require("express");
const {
  listAllSolicitudes,
  eliminarSolicitud,
  actualizarSolicitud,
  crearSolicitud,
  listAllSolicitudesById,
  removeAllSolicitudes,
} = require("../controllers/solicitud");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

// Validar jwt
router.use(validarJWT);

router.post("/new_solicitud", crearSolicitud);
router.get("/list_solicitudes", listAllSolicitudes);
router.delete("/remove_all", removeAllSolicitudes);
router.delete("/:id", eliminarSolicitud);
router.put("/:id", actualizarSolicitud);
router.get("/:id", listAllSolicitudesById);

module.exports = router;
