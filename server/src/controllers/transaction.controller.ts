require("dotenv").config();
import { Request, Response } from "express";
import https from "https";

async function InitializeTransaction(req: Request, res: Response) {
	const params = JSON.stringify({
		email: req.query.email,
		amount: req.query.amount,
	});

	const options = {
		hostname: "api.paystack.co",
		port: 443,
		path: "/transaction/initialize",
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.PAYSTACK_SEC}`,
			"Content-Type": "application/json",
		},
	};

	const reqPaystack = https.request(options, (resPayStack) => {
		let data = "";

		resPayStack.on("data", (chunk) => {
			data += chunk;
		});

		resPayStack.on("end", () => {
			res.status(200).json(JSON.parse(data));
			console.log(JSON.parse(data));
		});
	});

	reqPaystack.on("error", (error) => {
		console.error(error);
	});

	reqPaystack.write(params);
	reqPaystack.end();
}

async function ListTransactions(req: Request, res: Response) {
	const options = {
		hostname: "api.paystack.co",
		port: 443,
		path: "/transaction",
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.PAYSTACK_SEC}`,
		},
	};

	const reqPaystack = https.request(options, (resPayStack) => {
		let data = "";

		resPayStack.on("data", (chunk) => {
			data += chunk;
		});

		resPayStack.on("end", () => {
			res.status(200).json(JSON.parse(data));
			console.log(JSON.parse(data));
		});
	});

	reqPaystack.on("error", (error) => {
		console.error(error);
	});

	reqPaystack.end();
}

module.exports = { InitializeTransaction, ListTransactions };
