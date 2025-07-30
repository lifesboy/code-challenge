import {Request, Response, Router} from 'express'
import * as UserRepository from '../../../repositories/user'


export const router = Router()

router.put('/:id', async (req: Request, res: Response) => {
  const user = await UserRepository.updateById(+req.params?.id, {
    firstName: req.body?.firstName ?? undefined,
    lastName: req.body?.lastName ?? undefined,
  })

  res.send({data: user && user[1] && user[1][0]})
})
