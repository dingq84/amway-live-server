import { Request, Response } from 'express'

// Models
import { Role } from '../entities/Role'
import { Permission } from '../entities/Permission'
import { RolePermission } from '../entities/RolePermission'

export const getRoleList = async (request: Request, response: Response): Promise<void> => {
	const roles = await Role.find()
	response.send({ results: roles })
}

export const createRole = async (request: Request, response: Response): Promise<void> => {
	const { name: roleName } = request.body
	const permission = await Permission.find({ where: { name: 'live' }, select: ['id'] })
	const role = Role.create({ name: roleName })
	await role.save()
	const rolePermission = RolePermission.create({
		create: true,
		edit: true,
		delete: true,
		read: true,
		role,
		permission: permission[0],
	})
	await rolePermission.save()
	response.send({ message: 'success' })
}
