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
  const { name, description, img_url } = req.body;
  const imgUrl = img_url || null;
  await db.insertStudio(name, description, imgUrl);
  res.redirect("/studios");
};

const editStudio = async (req, res) => {
  const studioId = Number(req.params.id);
  const { name, description, img_url } = req.body;
  const imgUrl = img_url || null;
  await db.updateStudio(studioId, name, description, imgUrl);
  res.redirect("/studios");
};

module.exports = {
  renderAllStudiosPage,
  deleteStudio,
  renderStudioPage,
  addStudio,
  editStudio,
};
