import 'reflect-metadata'
import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'

// Routes
import auth from './routes/auth.route'

dotenv.config()

const PORT = process.env.PORT || 5000

const app: Application = express()

createConnection()

app.get('/', (request: Request, response: Response) =>
	response.send('Express + TypeScript Server')
)

app.use('/auth', auth)
app.listen(PORT, (): void => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
