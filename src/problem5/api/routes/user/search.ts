import {Request, Response, Router} from 'express'
import {searchUser} from '../../services/user'
import {handleRouteError, handleRouteResult} from '../../utils'
import {SearchUserReq} from '../../entities/user/search'


export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const options: SearchUserReq = {
    keyword: `${req.query?.keyword || ''}`,
    page: +`${req.query?.page}` || 0,
    limit: +`${req.query?.limit}` || 100,
  }

  try {
    const result = await searchUser(options)

    return await handleRouteResult(res, result)
  } catch (e) {
    return await handleRouteError(res, e)
  }
})
