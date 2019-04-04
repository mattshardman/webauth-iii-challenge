const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");
dotEnv.config();

const { JWT_SECRET } = process.env;

function verifyJWT(req, res, next) {
	const isRestricted = req.url.includes("restricted");
	if (isRestricted) {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(" ");
			jwt.verify(token[1], JWT_SECRET, (err, decodedToken) => {
				if (err) {
					return res.status(401).json({ message: "not authorized" });
				}

				req.token = decodedToken;
				return next();
			});
			
		} else {
			return res.status(401).json({ message: "not authorized" });
		}
	} else {
		next();
	}
}

module.exports = verifyJWT;
