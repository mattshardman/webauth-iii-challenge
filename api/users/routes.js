const express = require("express");
const routes = express.Router();

routes.get("/api/users", (req, res) => {
	res.status(200).send("hi");
});

module.exports = routes;