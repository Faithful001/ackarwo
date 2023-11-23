import jwt from "jsonwebtoken";
require("dotenv").config();

class JWT {
	private readonly JWT_SEC: string;

	constructor(JWT_SEC: string) {
		this.JWT_SEC = JWT_SEC;
	}

	createToken(payload: string) {
		return jwt.sign({ payload }, this.JWT_SEC, { expiresIn: "2d" });
	}

	verifyToken(payload: string) {
		return jwt.verify({ payload }, this.JWT_SEC);
	}
}

export default new JWT(process.env.JWT_SEC);
