const {Router}=require("express");

const { getMovies } = require("../controllers");

const router=Router();
//TIPO DE SOLICITUD A RECIBIR
router.get("/movies", getMovies);

module.exports=router;

