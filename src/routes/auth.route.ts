import express from 'express'

// Controllers
import { getRoleList } from '../controllers/auth.controller'

const router = express.Router()

router.get('/role_list', getRoleList)

export default router
