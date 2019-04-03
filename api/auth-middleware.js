const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
	if (req.url.includes("restricted")) {
		const token = req.headers.authorization.split(" ");
		jwt.verify(token[1], "secretty thing", (err, decodedToken) => {
			if (err) {
				return res.status(401).json({ message: "not authorized" });
			}
			req.token = decodedToken;
		});
		return next();
	}
	return next();
}

module.exports = verifyJWT;