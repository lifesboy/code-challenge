import {Request, Response, Router} from 'express'
import * as UserRepository from '../../../repositories/user'


export const router = Router()

router.delete('/:id', async (req: Request, res: Response) => {
  const deletedCount = await UserRepository.deleteById(+req.params?.id)

  res.send({data: deletedCount > 0})
})
