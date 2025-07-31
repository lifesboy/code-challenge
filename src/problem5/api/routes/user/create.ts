import {Request, Response, Router} from 'express'
import {createUser} from '../../services/user/create'
import {handleRouteError, handleRouteResult} from '../../utils'


export const router = Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const result = await createUser({
      data: {
        firstName: req.body?.firstName,
        lastName: req.body?.lastName,
      }
    })

    return await handleRouteResult(res, result)
  } catch (e) {
    return await handleRouteError(res, e)
  }
})
