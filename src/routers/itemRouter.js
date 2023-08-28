const express = require("express");

const { getItems, getFilterItems, getSearchItems } = require("../controllers/itemController");

const itemRouter = express.Router();

itemRouter.get("/", getItems);
itemRouter.get("/filtered", getFilterItems);
itemRouter.get("/search", getSearchItems);

module.exports = itemRouter;
