const data = require("../../../seedCategory");
const CategoryModel = require("../../models/categoryModel");

const seedCategory = async (req, res, next) => {
	try {
		// delete existing data
		await CategoryModel.deleteMany({});

		//  insert data
		const categories = await CategoryModel.insertMany(data.categories);

		// successful response
		return res.status(201).json(categories);
	} catch (error) {
		next(error);
	}
};
module.exports = { seedCategory };
