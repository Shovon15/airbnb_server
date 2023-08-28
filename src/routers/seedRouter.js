const express = require("express");
const { seedCategory } = require("../controllers/seed/seedCategory");
const { seedItems } = require("../controllers/seed/seedItems");

const seedCategoryRouter = express.Router();
const seedItemRouter = express.Router();

seedCategoryRouter.get("/category", seedCategory);
seedItemRouter.get("/item", seedItems);

module.exports = { seedCategoryRouter, seedItemRouter };
