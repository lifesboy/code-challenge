import {Request, Response, Router} from 'express'
import * as UserRepository from '../../../repositories/user'


export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const keyword = `${req.query?.keyword || ''}`
  const searchResults = await UserRepository.search({keyword})

  res.send({
    data: {
      count: searchResults?.count || 0,
      rows: searchResults?.rows || [],
    }
  })
})
