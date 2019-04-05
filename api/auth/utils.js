const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");
dotEnv.config();

const { JWT_SECRET } = process.env;

function makeTokenFromUser(user) {
	const payload = {
		subject: user.id,
		username: user.name
	};

	const options = {
		expiresIn: "1h"
	};

	const token = jwt.sign(payload, JWT_SECRET, options);

	return token;
}



module.exports = { makeTokenFromUser };
