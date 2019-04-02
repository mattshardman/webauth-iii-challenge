const db = require("../database/dbConfig");

const addUser = async user => {
	await db.insert(user).into("users");
	return user;
};

module.exports = { addUser };
