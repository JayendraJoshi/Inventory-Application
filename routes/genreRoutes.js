const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");

router.get("/", genreController.renderAllGenrePage);

router.get("/new", genreController.renderAddGenrePage);

router.get("/:id", genreController.renderGenrePage);

router.post("/new", genreController.addGenre);

router.delete("/remove", () => {
  //Remove genre
});

module.exports = { router };
