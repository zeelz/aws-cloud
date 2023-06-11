import express, {Express, Request, Response} from 'express'
import { config } from 'dotenv'
config()

const app: Express = express()

app.get('/status', (req:Request, res:Response) => {
    res.json({status: 'healthy!!!'})
})

app.listen(process.env.PORT, () => console.log('server running...'))