const express = require("express");

const routes = express.Router();

routes.post("/api/auth/register", async (req, res) => {
	res.send("hi");
});

module.exports = routes;