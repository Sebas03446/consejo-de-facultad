const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");
const cookieParser = require("cookie-parser");

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://cdfunal.me"],
    credentials: true,
  })
);

// Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/solicitudes", require("./routes/solicitud"));
app.use("/api/email", require("./routes/email"));

// Escuchar peticiones
app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
