import express, {Request, Response} from 'express'

export const app = express()

app.post('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!')
})
app.get('/list', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!')
})
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!')
})
app.put('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!')
})
app.delete('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!')
})

module.exports = {
  app: app,
}