module.exports = {
	name: 'default',
	type: 'postgres',
	host: process.env.HOST,
	port: 5432,
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	synchronize: true,
	logging: false,
	// dropSchema: true,
	entities: ['src/entities/**/*.${extension}'],
	migrations: ['src/migrations/**/*.${extension}'],
	cli: {
		entitiesDir: 'src/entities',
		migrationsDir: 'src/migrations',
	},
}
