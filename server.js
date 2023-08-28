const app = require("./src/app");
const connectDB = require("./src/config/db");
const { serverPort } = require("./src/secret.js");


app.listen(serverPort, async () => {
	console.log(`airbnb server running on ${serverPort}`);
	await connectDB();
});
