const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
	category_name: {
		type: String,
		required: [true, "category name is required"],
		trim: true,
	},
	icon: {
		type: String,
		required: [true, "icon is required"],
	},
});

const CategoryModel = model("category", categorySchema);

module.exports = CategoryModel;
