import express, {Request, Response} from 'express'

export const app = express()

app.post('/api/user', (req: Request, res: Response) => {
  res.send({data: {}})
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

module.exports = {
  app: app,
}