const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const categoryRouter = require("./routers/categoryRouter");
const itemRouter = require("./routers/itemRouter");
const { seedCategoryRouter, seedItemRouter } = require("./routers/seedRouter");
const { errorResponse } = require("./controllers/responseController");
const createError = require("http-errors");

const app = express();
app.use(cors());

app.use("/api/seed", seedCategoryRouter, seedItemRouter);
app.use("/api/category", categoryRouter);
app.use("/api/item", itemRouter);

//client error--------------------
app.use((req, res, next) => {
	next(createError(404, "Route not found."));
});

//server error------------------
app.use((err, req, res, next) => {
	return errorResponse(res, {
		statusCode: err.status,
		message: err.message,
	});
});

app.get("/", (req, res) => {
	res.status(200).send({
		message: "welcome to Airbnb server!!!",
	});
});

module.exports = app;
