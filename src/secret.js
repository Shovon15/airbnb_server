require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 5001;
const mongoDB =
	process.env.MONGODB_ATLAS_URL || "mongodb+srv://shovon:n9FrwkcKhla2d6t4@cluster0.o5a9jb9.mongodb.net/airbnbDB";

module.exports = {
	serverPort,
	mongoDB,
};
