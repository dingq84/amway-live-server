import 'reflect-metadata'
import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import bodyParser from 'body-parser'

// Routes
import auth from './routes/auth.route'

dotenv.config()

const PORT = process.env.PORT || 5000

const app: Application = express()

createConnection()

app.use(bodyParser.json())
app.use('/auth', auth)
app.listen(PORT, (): void => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
