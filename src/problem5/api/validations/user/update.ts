import * as yup from 'yup'
import * as MESSAGES from '../../../domain/messages'
import {UpdateUserReq} from '../../entities/user/update/updateUserReq'


export async function validateUpdateUserReq(options: UpdateUserReq): Promise<UpdateUserReq> {
  const schema = yup.object().shape({
    id: yup.number()
      .min(1, MESSAGES.ERROR.INVALID_PARAMS)
      .required(),
    data: yup.object().shape({
      firstName: yup.string()
        .max(255, MESSAGES.ERROR.INVALID_PARAMS)
        .nullable(),
      lastName: yup.string()
        .max(255, MESSAGES.ERROR.INVALID_PARAMS)
        .nullable(),
    })
      .required()
  })

  return await schema.validate(options)
}
