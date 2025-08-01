import * as yup from 'yup'
import * as MESSAGES from '../../../domain/messages'
import {DeleteUserReq} from '../../entities/user/delete/deleteUserReq'


export async function validateDeleteUserReq(options: DeleteUserReq): Promise<DeleteUserReq> {
  const schema = yup.object().shape({
    id: yup.number()
      .min(1, MESSAGES.ERROR.INVALID_PARAMS)
      .required(),
  })

  return await schema.validate(options)
}
