const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.renderAllMoviesPage);

router.get("/:id", movieController.renderMoviePage);

router.post("/new", () => {
  //Add new film
});

router.post("/:id/delete", movieController.deleteMovie);

module.exports = { router };
