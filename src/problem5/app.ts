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

app.get('/api/user/search', async (req: Request, res: Response) => {
  const searchResults = await UserRepository.search()

  res.send({
    data: {
      count: searchResults?.count || 0,
      rows: searchResults?.rows || [],
    }
  })
})

app.get('/api/user/:id', async (req: Request, res: Response) => {
  const user = await UserRepository.getById(+req.params?.id)

  res.send({data: user})
})

app.put('/api/user/:id', async (req: Request, res: Response) => {
  const user = await UserRepository.updateById(+req.params?.id, {
    firstName: req.body?.firstName ?? undefined,
    lastName: req.body?.lastName ?? undefined,
  })

  res.send({data: user && user[1] && user[1][0]})
})

app.delete('/api/user/:id', async (req: Request, res: Response) => {
  const deletedCount = await UserRepository.deleteById(+req.params?.id)

  res.send({data: deletedCount > 0})
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send({error: err})
})