import * as yup from 'yup'
import * as MESSAGES from '../../../domain/messages'
import User from "../../../models/user.model";


export async function validateCreateUserData(data: any): Promise<Partial<User>> {
  const schema = yup.object().shape({
    firstName: yup.string()
      .max(255, MESSAGES.ERROR.INVALID_PARAMS)
      .nullable(),
    lastName: yup.string()
      .max(255, MESSAGES.ERROR.INVALID_PARAMS)
      .nullable(),
  })

  return await schema.validate(data)
}
