const express = require("express");
const Users = require("../../data/helpers/userModel");

const routes = express.Router();


routes.get("/api/restricted/users", async (req, res) => {
	try {
		const users = await Users.getUsers();
		console.log(users);
		res.status(200).json(users);
	} catch (e) {
		console.log(e);
		// res.status(400).json(e);
	}
	
});

module.exports = routes;
