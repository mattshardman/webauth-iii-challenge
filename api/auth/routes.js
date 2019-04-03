const express = require("express");
const jwt = require("jsonwebtoken");
const { hashSync } = require("bcryptjs");

const Users = require("../../data/helpers/userModel");

const routes = express.Router();

function makeTokenFromUser(user) {
	const payload = {
		subject: user.id,
		username: user.name
	};

	const options = {
		expiresIn: "1h"
	};

	const token = jwt.sign(payload, "secretty thing", options);

	return token;
}

routes.post("/api/auth/register", async (req, res) => {
	const { user, password } = req.body;
	const hash = hashSync(password, 14);
	try {
		const newUser = await Users.addUser({ user, hash });
		const token = makeTokenFromUser(newUser);
		res.status(201).json(token);
	} catch (e) {
		res.status(401).json(e);
	}
});

// routes.post("api/auth/login", async (req, res) => {
// 	const { user, password } = req.body;
// });

module.exports = routes;
