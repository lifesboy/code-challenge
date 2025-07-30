import {Request, Response, Router} from 'express'
import * as UserRepository from '../../../repositories/user'


export const router = Router()

router.post('/', async (req: Request, res: Response) => {
  const user = await UserRepository.create({
    firstName: req.body?.firstName,
    lastName: req.body?.lastName,
  })

  res.send({data: user})
})
