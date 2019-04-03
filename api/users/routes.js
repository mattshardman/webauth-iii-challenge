const express = require("express");
const Users = require("../../data/helpers/userModel");

const routes = express.Router();


routes.get("/api/restricted/users", async (req, res) => {
	const users = await Users.getUsers();
	res.status(200).send(users);
});

module.exports = routes;
