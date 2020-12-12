import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'

import { RolePermission } from './RolePermission'

@Entity()
export class Role extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column({ length: 50 })
	name!: string

	@OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
	permissions!: RolePermission[]
}
