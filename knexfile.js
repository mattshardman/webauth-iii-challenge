// Update with your config settings.

module.exports = {

	development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./data/database/users.sqlite3"
		},
		migrations: {
			directory: "./data/migrations"
		},
		seed: {
			directory: "./data/seeds"
		}
	},

	staging: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user:     "username",
			password: "password"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	},

	production: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user:     "username",
			password: "password"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: "knex_migrations"
		}
	}

};
