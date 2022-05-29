const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb://admin:admin123@localhost:27017/consejo_facultad?authSource=admin`
    );

    console.log("Db Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar BD");
  }
};

module.exports = {
  dbConnection,
};
