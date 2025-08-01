import * as yup from 'yup'
import * as MESSAGES from '../../../domain/messages'
import {DetailUserReq} from '../../entities/user/detail/detailUserReq'


export async function validateDetailUserReq(options: DetailUserReq): Promise<DetailUserReq> {
  const schema = yup.object().shape({
    id: yup.number()
      .min(1, MESSAGES.ERROR.INVALID_PARAMS)
      .required(),
  })

  return await schema.validate(options)
}
