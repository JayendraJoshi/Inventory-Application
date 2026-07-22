const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie-controller");

router.get("/", movieController.renderAllMoviesPage);

router.get("/new", movieController.renderAddMoviePage);

router.get("/:id", movieController.renderMoviePage);

router.post("/new", movieController.addMovie);

router.post("/:id/delete", movieController.deleteMovie);

module.exports = { router };
