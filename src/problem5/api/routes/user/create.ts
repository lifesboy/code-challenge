import {Request, Response, Router} from 'express'
import {createUser} from '../../services/user/create'
import {handleRouteError, handleRouteResult} from '../../utils'
import {CreateUserReq} from '../../entities/user/create/createUserReq'


export const router = Router()

router.post('/', async (req: Request, res: Response) => {
  const options: CreateUserReq = {
    data: req.body
  }

  try {
    const result = await createUser(options)

    return await handleRouteResult(res, result)
  } catch (e) {
    return await handleRouteError(res, e)
  }
})
