const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://doadmin:zGH942q35c8if17S@db-mongodb-nyc3-09422-3a8b11d0.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-nyc3-09422`
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
