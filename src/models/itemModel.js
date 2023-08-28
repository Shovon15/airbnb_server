const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
	name: {
		type: String,
		required: [true, "item name is required"],
		trim: true,
	},
	category_name: {
		type: String,
		required: [true, "category name is required"],
		trim: true,
	},
	image: {
		type: String,
		required: [true, "image is required"],
	},
	price: {
		type: Number,
		required: [true, "price is required"],
	},
	room: {
		type: Number,
		required: [true, "room number is required"],
	},
	bed: {
		type: Number,
		required: [true, "bed number is required"],
	},
	bathroom: {
		type: Number,
		required: [true, "bthroom number is required"],
	},
	property_type: {
		type: String,
		required: [true, "property type  is required"],
		trim: true,
	},
	location: {
		type: String,
		required: [true, "location  is required"],
	},
	checkin_avalable: {
		type: String,
		required: [true, "checkin date  is required"],
	},
	checkout_avalable: {
		type: String,
		required: [true, "check out date  is required"],
	},
	adaltguest: {
		type: Number,
		required: [true, "total guest number  is required"],
	},
	infants: {
		type: Number,
		required: [true, "infants number  is required"],
	},
});

const ItemModel = model("item", itemSchema);

module.exports = ItemModel;
