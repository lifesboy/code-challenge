import * as yup from 'yup'
import * as MESSAGES from '../../../domain/messages'
import {SearchUserReq} from '../../entities/user/search'


export async function validateSearchUserReq(data: SearchUserReq): Promise<SearchUserReq> {
  const schema = yup.object().shape({
    keyword: yup.string()
      .nullable(),
    page: yup.number()
      .min(0, MESSAGES.ERROR.INVALID_PARAMS)
      .nullable(),
    limit: yup.number()
      .min(1, MESSAGES.ERROR.INVALID_PARAMS)
      .nullable(),
  })

  return await schema.validate(data)
}
