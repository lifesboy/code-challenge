import {Request, Response, Router} from 'express'
import * as UserRepository from '../../../repositories/user'


export const router = Router()

router.get('/:id', async (req: Request, res: Response) => {
  const user = await UserRepository.getById(+req.params?.id)

  res.send({data: user})
})
