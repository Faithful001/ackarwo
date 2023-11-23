import mongoose from "mongoose";
require("dotenv").config();

async function connectToDB(successMessage: string) {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		return successMessage;
	} catch (error) {
		console.error(error);
	}
}

export default connectToDB;
