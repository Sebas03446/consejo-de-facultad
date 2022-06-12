/*
    Rutas de Usuarios   
    host + /api/users   
*/

const { Router, request, response } = require("express");
const { listAllUsers, eliminarUsuario } = require("../controllers/user");

const router = Router();

router.get("/list_users", listAllUsers);

router.delete("/:id", eliminarUsuario);

module.exports = router;
