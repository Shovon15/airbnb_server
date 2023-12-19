const express = require("express");
const { getCategory } = require("../controllers/categoryController");
const { getItemByCategory, getItems } = require("../controllers/itemController");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
// categoryRouter.get("/", getItems);
categoryRouter.get("/:category", getItemByCategory);

module.exports = categoryRouter;
