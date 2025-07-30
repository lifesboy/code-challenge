import express, {Request, Response} from 'express'
import * as UserRepository from './repositories/user'

export const app = express()

app.post('/api/user', async (req: Request, res: Response) => {
  const user = await UserRepository.create({})
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