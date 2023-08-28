const itemData = require("../../../seedItem");
const ItemModel = require("../../models/itemModel");

const seedItems = async (req, res, next) => {
	try {
		// delete existing data
		await ItemModel.deleteMany({});

		//  insert data
		const items = await ItemModel.insertMany(itemData.items);

		// successful response
		return res.status(201).json(items);
	} catch (error) {
		next(error);
	}
};
module.exports = { seedItems };