import express, {NextFunction, Request, Response} from 'express'
import * as UserRepository from './repositories/user'

export const app = express()
app.use(express.json())

app.post('/api/user', async (req: Request, res: Response) => {
  const user = await UserRepository.create({
    firstName: req.body?.firstName,
    lastName: req.body?.lastName,
  })

  res.send({data: user})
})

app.get('/api/user/list', (req: Request, res: Response) => {
  res.send({data: []})
})

app.get('/api/user/:id', (req: Request, res: Response) => {
  res.send({data: {}})
})

app.put('/api/user/:id', (req: Request, res: Response) => {
  res.send({data: {}})
})

app.delete('/api/user/:id', (req: Request, res: Response) => {
  res.send({data: true})
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send({error: err})
})