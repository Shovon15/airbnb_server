const createError = require("http-errors");
const ItemModel = require("../models/itemModel");
const { successResponse } = require("./responseController");

const getItemByCategory = async (req, res, next) => {
	try {
		const category = req.params.category;

		const items = await ItemModel.find({
			category_name: { $regex: category, $options: "i" },
		});

		if (!items || items.length === 0) {
			throw createError(404, "No items found");
		}

		return successResponse(res, {
			statusCode: 200,
			message: "Items were returned successfully!!!",
			payload: {
				items,
			},
		});
	} catch (error) {
		next(error);
	}
};

const getItems = async (req, res, next) => {
	try {
		const items = await ItemModel.find();

		if (!items || items.length === 0) {
			throw createError(404, "No items found");
		}

		return successResponse(res, {
			statusCode: 200,
			message: "Items were returned successfully!!!",
			payload: {
				items,
			},
		});
	} catch (error) {
		next(error);
	}
};

const getFilterItems = async (req, res, next) => {
	try {
		const { params } = req.query;
		// const { property_type, room, bed, bathroom, minPrice, maxPrice } = req.query;

		const minPrice = parseFloat(params.minPrice) || 0;
		const maxPrice = parseFloat(params.maxPrice) || Number.MAX_SAFE_INTEGER;
		const minRooms = parseInt(params.room) || 0;
		const minBeds = parseInt(params.bed) || 0;
		const minBathrooms = parseInt(params.bathroom) || 0;
		const propertyTypes = params.property_type || [];

		let filter = {
			$and: [
				{
					price: { $gte: minPrice, $lte: maxPrice },
				},
				{
					bed: { $gte: minBeds },
				},
				{
					room: { $gte: minRooms },
				},
				{
					bathroom: { $gte: minBathrooms },
				},
			],
		};

		if (!Array.isArray(propertyTypes)) {
			propertyTypes = [propertyTypes];
		}

		if (propertyTypes.length === 1) {
			filter.property_type = propertyTypes[0];
		} else if (propertyTypes.length > 1) {
			filter.property_type = { $in: propertyTypes };
		}

		filter = {
			...filter,
		};
		const items = await ItemModel.find(filter);

		const count = await ItemModel.find(filter).countDocuments();

		if (!items || items.length === 0) {
			throw createError(404, "No items found");
		}

		return successResponse(res, {
			statusCode: 200,
			message: "Items were returned successfully!!!",
			payload: {
				items,
				count,
				// minPrice,
				// maxPrice,
				// minRooms,
				// minBeds,
				// propertyTypes,
				// minBathrooms,
				// params,
			},
		});
	} catch (error) {
		next(error);
	}
};
const getSearchItems = async (req, res, next) => {
	try {
		const searchQuery = req.query;

		destination = searchQuery.destination;
		from_date = searchQuery.from_date;
		to_date = searchQuery.to_date;
		adaltguest = parseInt(searchQuery.adaltguest);
		infants = parseInt(searchQuery.infants);

		const searchRegExp = new RegExp(".*" + destination + ".*", "i");
		const searchCheckInRegExp = new RegExp(".*" + from_date + ".*", "i");
		const searchCheckOutRegExp = new RegExp(".*" + to_date + ".*", "i");

		let filter = {
			$and: [
				{
					location: { $regex: searchRegExp },
				},
				// {
				// 	checkin_avalable: { $regex: searchCheckInRegExp },
				// },
				// {
				// 	checkout_avalable: { $regex: searchCheckOutRegExp },
				// },
				{
					adaltguest: { $gte: adaltguest },
				},
				{
					infants: { $gte: infants },
				},
			],
		};
		const items = await ItemModel.find(filter);

		const count = await ItemModel.find(filter).countDocuments();

		if (!items || items.length === 0) {
			throw createError(404, "No items found");
		}
		// console.log(count, "count");
		return successResponse(res, {
			statusCode: 200,
			message: "Items were returned successfully!!!",
			payload: {
				items,
				count,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getItemByCategory, getItems, getFilterItems, getSearchItems };
