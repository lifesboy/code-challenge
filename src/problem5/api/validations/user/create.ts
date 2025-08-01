import * as yup from 'yup'
import * as MESSAGES from '../../../domain/messages'
import {CreateUserReq} from '../../entities/user/create'


export async function validateCreateUserReq(data: CreateUserReq): Promise<CreateUserReq> {
  const schema = yup.object().shape({
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

  return await schema.validate(data)
}
