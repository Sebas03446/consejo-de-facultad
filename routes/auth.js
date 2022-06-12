/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router, request, response } = require("express");
// const { check } = require("express-validator");
// const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { crearAdmin } = require("../controllers/user");
//const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/new_admin", crearAdmin);

router.post(
  "/new",
  // [
  //   check("name", "El nombre es obligatorio").not().isEmpty(),
  //   check("email", "El email es obligatorio").isEmail(),
  //   check("password", "El password debe de ser de 6 caracteres").isLength({
  //     min: 6,
  //   }),
  //   validarCampos,
  // ],
  crearUsuario
);

router.post(
  "/",
  // [
  //   check("email", "El email es obligatorio").isEmail(),
  //   check("password", "El password debe de ser de 6 caracteres").isLength({
  //     min: 6,
  //   }),
  //   validarCampos,
  // ],
  loginUsuario
);

//router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
