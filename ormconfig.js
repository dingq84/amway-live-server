module.exports = {
	name: 'default',
	type: 'postgres',
	host: process.env.HOST,
	database: process.env.DATABASE,
	port: 5432,
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	synchronize: true,
	logging: false,
	// dropSchema: true,
	entities: ['src/entities/*.ts'],
	migrations: ['src/migrations/*.ts'],
	cli: {
		entitiesDir: 'src/entities',
		migrationsDir: 'src/migrations',
	},
}
