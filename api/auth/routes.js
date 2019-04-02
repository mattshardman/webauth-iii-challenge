const express = require("express");
const { hashSync, compareSync } = require("bcryptjs");

const routes = express.Router();

routes.post("/api/auth/register", async (req, res) => {
	const { user, password } = req.body;
	const hash = hashSync(password, 14);
	res.status(201).json({user, hash});
});

module.exports = routes;