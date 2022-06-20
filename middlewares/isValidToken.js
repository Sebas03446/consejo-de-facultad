const jwt = require("jsonwebtoken");

const isValidToken = (token) => {
  if (!process.env.SECRET_JWT_SEED) {
    throw new Error("No se ha configurado la semilla de JWT");
  }

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.SECRET_JWT_SEED, (err, payload) => {
        if (err) {
          return reject("JWT no es válido");
        }

        const { uid, name } = payload;

        resolve({ uid, name });
      });
    } catch (error) {
      reject("JWT no es válido");
    }
  });
};

module.exports = {
  isValidToken,
};
