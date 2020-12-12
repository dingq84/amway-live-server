import { Request, Response } from 'express'

// Models
import { Role } from '../entities/Role'

export const getRoleList = async (request: Request, response: Response): Promise<void> => {
	const roles = await Role.find()
	console.log(roles)
	response.send({ results: roles })
}
