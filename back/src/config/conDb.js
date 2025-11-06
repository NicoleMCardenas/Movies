require("dotenv").config();
const mongoose = require("mongoose");

const conDb = async () => {
  const uri = process.env.MONGO_URI; 

  if (!uri) {
    console.error("❌ Error: MONGO_URI no está definido en las variables de entorno");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ Conectado a la BDD");
  } catch (err) {
    console.error("❌ Falló la conexión con MongoDB:", err.message);
    throw err;
  }
};

module.exports = conDb;
