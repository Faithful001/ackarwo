import express from "express";
const {
	InitializeTransaction,
	ListTransactions,
} = require("../controllers/transaction.controller");

const router = express.Router();

router.get("/paystack/initialize", InitializeTransaction);
router.get("/paystack/list", ListTransactions);

module.exports = router;
