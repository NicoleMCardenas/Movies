require("dotenv").config();
const mongoose = require("mongoose");

const conDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a la BDD")
    } catch (err) {
        throw new Error("Falló la conexión con MongoDB");
      }
    };

module.exports = conDb;

