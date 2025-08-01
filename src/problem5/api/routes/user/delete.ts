import {Request, Response, Router} from 'express'
import {deleteUser} from '../../services/user'
import {handleRouteError, handleRouteResult} from '../../utils'
import {DeleteUserReq} from '../../entities/user/delete'


export const router = Router()

router.delete('/:id', async (req: Request, res: Response) => {
  const options: DeleteUserReq = {
    id: +req.params?.id,
  }

  try {
    const result = await deleteUser(options)

    return await handleRouteResult(res, result)
  } catch (e) {
    return await handleRouteError(res, e)
  }
})
