import { MigrationInterface, QueryRunner } from 'typeorm'

export class PermissionMigration1607786377812 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const permissionList = ['account', 'live']
		permissionList.forEach((permission) => {
			queryRunner.manager
				.createQueryBuilder()
				.insert()
				.into('permission')
				.values({ name: permission })
				.execute()
		})
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
