import { BaseEntity, Column, Entity, Index, ManyToOne } from 'typeorm'

// Entities
import { Role } from './Role'
import { Permission } from './Permission'

@Entity()
@Index(['role', 'permission'], { unique: true })
export class RolePermission extends BaseEntity {
	@Column()
	create!: boolean

	@Column()
	edit!: boolean

	@Column()
	read!: boolean

	@Column()
	delete!: boolean

	@ManyToOne(() => Role, (role) => role.permissions, { primary: true })
	role!: Role

	@ManyToOne(() => Permission, (permission) => permission.roles, {
		primary: true,
	})
	permission!: Permission
}
