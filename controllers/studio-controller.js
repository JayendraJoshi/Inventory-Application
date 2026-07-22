const db = require("../db/database");

const renderAllStudiosPage = async (req, res) => {
  const studios = await db.getAllStudiosASC();
  res.render("all-studios", { studios: studios });
};

const renderStudioPage = async (req, res) => {
  const studio = await db.getStudio(req.params.id);
  res.render("studio", { studio: studio });
};

const deleteStudio = async (req, res) => {
  await db.deleteStudio(req.params.id);
  const previousPage = req.get("Referrer");
  res.redirect(previousPage);
};

const renderStudioEditForm = async (req, res) => {};

const addStudio = async (req, res) => {
  const { name, description } = req.body;
  await db.insertStudio(name, description);
  res.redirect("/studios");
};

module.exports = {
  renderAllStudiosPage,
  deleteStudio,
  renderStudioPage,
  addStudio,
};
