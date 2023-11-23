const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
	{
		amount: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		specification: {
			type: String,
			enum: ["Income", "Expense"],
			required: false,
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const model = mongoose.model(
	"Transaction",
	TransactionSchema,
	"ackarwo transactions"
);

module.exports = model;
