const app = require("./src/server");
const conDb = require("./src/config/conDb");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
conDb()
  .then((res) =>{
   app.listen(process.env.PORT,() => {
    console.log("Servidor escuchando puerto" + process.env.PORT)
   });
})
.catch((err) =>{
    console.log("Error al conectar la BDD", err.message);
});
