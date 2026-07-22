const express = require("express");
const router = express.Router();
const studioController = require("../controllers/studio-controller");

router.get("/", studioController.renderAllStudiosPage);

router.get("/:id", studioController.renderStudioPage);

router.post("/new", studioController.addStudio);

router.post("/:id/delete", studioController.deleteStudio);

router.post("/:id/edit", studioController.editStudio);

module.exports = { router };
