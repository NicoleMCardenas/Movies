const {Router}=require("express");

const moviesController = require("../controllers/moviesController");

const indexRouter=Router();
//TIPO DE SOLICITUD A RECIBIR
indexRouter.get("/movies", moviesController.getMovies);

module.exports=indexRouter;

