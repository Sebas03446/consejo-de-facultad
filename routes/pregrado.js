/*
    Rutas de Usuarios   
    host + /api/degree   
*/

const { Router } = require("express");
const {
  listAllPregrados,
  crearPregrado,
  eliminarPregrado,
} = require("../controllers/pregrado");

const router = Router();

router.get("/list_degree", listAllPregrados);

router.post("/create_degree", crearPregrado);

router.delete("/:id", eliminarPregrado);

module.exports = router;
