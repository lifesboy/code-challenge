import {ApiResponse} from '../../entities/apiResponse'
import {SuccessResponse} from '../../entities/successResponse'
import {ErrorResponse} from '../../entities/errorResponse'
import * as MESSAGES from '../../../domain/messages'
import * as CODES from '../../../domain/codes'
import * as STATUSES from '../../../domain/statuses'
import User from '../../../models/user.model'
import * as UserCreateDomainService from '../../../domain/services/user/create'
import {validateCreateUserData} from '../../validations/user/create'


export async function createUser(options: { data: object }): Promise<ApiResponse> {
  const createUserData = await validateCreateUserData(options.data)
  const res = await UserCreateDomainService.createUser(createUserData)

  return !!res
    ? {
      status: STATUSES.SUCCESS.CREATED,
      code: CODES.SUCCESS.CREATED,
      data: res,
    } as SuccessResponse<User>
    : {
      status: STATUSES.ERROR.SERVER_ERROR,
      code: CODES.ERROR.SERVER_ERROR,
      message: MESSAGES.ERROR.CREATE_FAIL,
    } as ErrorResponse
}
