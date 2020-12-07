import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

const app: Application = express()

app.get('/', (request: Request, response: Response) =>
	response.send('Express + TypeScript Server')
)

app.listen(PORT, (): void => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
