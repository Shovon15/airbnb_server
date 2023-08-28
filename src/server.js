const app = require("./app");
const connectDB = require("./config/db");
const { serverPort } = require("./secret.js");


app.listen(serverPort, async () => {
	console.log(`airbnb server running on ${serverPort}`);
	await connectDB();
});
