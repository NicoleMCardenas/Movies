const {Router}=require("express");

const moviesController = require("../controllers/moviesController");

const indexRouter=Router();
//TIPO DE SOLICITUD A RECIBIR
indexRouter.get("/movies", moviesController.getMovies);
indexRouter.post("/movies", moviesController.createMovie);

module.exports=indexRouter;

