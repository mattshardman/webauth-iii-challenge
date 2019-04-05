const db = require("../database/dbConfig");

const addUser = async user => {
	const id = await db.insert(user).into("users");
	const newUser = await db("users").where({ id: id[0] }).first();
	return newUser;
};

const getUsers = async () => {
	const users = await db("users");
	return users;
};

const getUser = async user => {
	const u = await db("users").where({ user }).first();
	return u;
};

module.exports = { addUser, getUsers, getUser };
