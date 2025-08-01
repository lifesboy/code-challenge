import {Request, Response, Router} from 'express'
import {updateUser} from '../../services/user'
import {handleRouteError, handleRouteResult} from '../../utils'
import {UpdateUserReq} from '../../entities/user/update'


export const router = Router()

router.put('/:id', async (req: Request, res: Response) => {
  const options: UpdateUserReq = {
    id: +req.params?.id,
    data: req.body
  }

  try {
    const result = await updateUser(options)

    return await handleRouteResult(res, result)
  } catch (e) {
    return await handleRouteError(res, e)
  }
})
