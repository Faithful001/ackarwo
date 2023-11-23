// index.ts
import express from "express";
import cors from "cors";
import connectToDB from "./config/db.config"; // Import the function properly
const transactionView = require("./views/transaction.view");
require("dotenv").config();

const app = express();

// const corsOptions = {
// 	origin: ["http://localhost:5173"],
// 	methods: ["GET", "POST", "PATCH", "DELETE"], // Change "method" to "methods"
// };

app.use(cors());

// app.options("*", cors(corsOptions));

app.use(express.json());

app.use("/api/transactions", transactionView);

const port = process.env.PORT;

connectToDB(`JSON server is running at http://localhost:${port}`)
	.then((successMessage) => {
		app.listen(port, () => {
			console.log(successMessage);
		});
	})
	.catch((error) => {
		console.error(error);
	});
