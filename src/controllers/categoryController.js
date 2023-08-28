const createError = require("http-errors");
const CategoryModel = require("../models/categoryModel");
const { successResponse } = require("./responseController");

const getCategory = async (req, res, next) => {
	try {
		const category = await CategoryModel.find();

		if (!category) throw createError(404, "No category found ");

		return successResponse(res, {
			statusCode: 200,
			message: "Category were return successfully!!!",
			payload: {
				category,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getCategory };
