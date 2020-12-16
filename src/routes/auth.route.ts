import express from 'express'

// Controllers
import { createRole, getRoleList } from '../controllers/auth.controller'

const router = express.Router()

router.get('/role_list', getRoleList)
router.post('/create_role', createRole)

export default router
