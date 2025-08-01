import {Request, Response, Router} from 'express'
import {detailUser} from '../../services/user/detail'
import {handleRouteError, handleRouteResult} from '../../utils'
import {DetailUserReq} from '../../entities/user/detail/detailUserReq'


export const router = Router()

router.get('/:id', async (req: Request, res: Response) => {
  const options: DetailUserReq = {
    id: +req.params?.id,
  }

  try {
    const result = await detailUser(options)

    return await handleRouteResult(res, result)
  } catch (e) {
    return await handleRouteError(res, e)
  }
})
