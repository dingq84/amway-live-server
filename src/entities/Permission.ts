import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'

import { RolePermission } from './RolePermission'

@Entity()
export class Permission extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column({ length: 100 })
	name!: string

	@OneToMany(
		() => RolePermission,
		(rolePermission) => rolePermission.permission
	)
	roles!: RolePermission[]
}
