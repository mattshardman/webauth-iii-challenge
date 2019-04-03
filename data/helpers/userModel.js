const db = require("../database/dbConfig");

const addUser = async user => {
	const id = await db.insert(user).into("users");
	const newUser = await db("users").where({ id: id[0] });
	return newUser[0];
};

module.exports = { addUser };
