import {NextFunction, Request, Response} from 'express'
import * as express from 'express'
import {router as userRouter} from './routes/user'


export const app = express()
app.use(express.json())

app.use('/api/user', userRouter)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send({error: err})
})