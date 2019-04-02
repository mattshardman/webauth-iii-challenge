const express = require("express");
const { hashSync, compareSync } = require("bcryptjs");

const Users = require("../../data/helpers/userModel");

const routes = express.Router();

routes.post("/api/auth/register", async (req, res) => {
	const { user, password } = req.body;
	const hash = hashSync(password, 14);
	const newUser = await Users.addUser({ user, hash });
	res.status(201).json(newUser);
});

module.exports = routes;
