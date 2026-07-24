const db = require("../db/database");
const { body, validationResult } = require("express-validator");

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

const validateStudio = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name can not be empty")
    .isLength({
      max: 30,
    })
    .withMessage("Name can not be longer than 30 characters"),
  body("description")
    .trim()
    .optional()
    .isLength({
      max: 300,
    })
    .withMessage("Description can not be longer than 300 characters"),
  body("img_url")
    .trim()
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Needs to be a url"),
];

const addStudio = [
  validateStudio,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { name, description, img_url } = req.body;
    const imgUrl = img_url || null;
    await db.insertStudio(name, description, imgUrl);
    return res.status(200).json({
      success: true,
    });
  },
];

const editStudio = [
  validateStudio,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const studioId = Number(req.params.id);
    const { name, description, img_url } = req.body;
    const imgUrl = img_url || null;
    await db.updateStudio(studioId, name, description, imgUrl);
    return res.status(200).json({
      success: true,
    });
  },
];

module.exports = {
  renderAllStudiosPage,
  deleteStudio,
  renderStudioPage,
  addStudio,
  editStudio,
};
