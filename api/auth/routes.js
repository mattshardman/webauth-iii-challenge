const express = require("express");
const { hashSync, compareSync } = require("bcryptjs");

const { makeTokenFromUser } = require("./utils");

const Users = require("../../data/helpers/userModel");

const routes = express.Router();

routes.post("/api/auth/register", async (req, res) => {
	const { user, password, department } = req.body;
	const hash = hashSync(password, 14);
	try {
		const newUser = await Users.addUser({ user, hash, department });
		const token = makeTokenFromUser(newUser);
		res.status(201).json(token);
	} catch (e) {
		res.status(401).json(e);
	}
});

routes.post("/api/auth/login", async (req, res) => {
	const { user, password } = req.body;
	const u = await Users.getUser(user);
	const match = compareSync(password, u.hash);
	if (match) {
		const token = makeTokenFromUser(u);
		return res.status(200).json(token);
	}
	return res.status(400).json({ message: "Could not authorize user "});
});

module.exports = routes;
