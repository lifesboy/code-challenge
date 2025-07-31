import * as UserRepository from '../../../repositories/user'
import User from '../../../models/user.model'
import {ApiResponse} from '../../entities/apiResponse'
import {SuccessResponse} from '../../entities/successResponse'
import {ErrorResponse} from '../../entities/errorResponse'
import * as MESSAGES from '../../../domain/messages'
import * as CODES from '../../../domain/codes'
import * as STATUSES from '../../../domain/statuses'


export async function createUser(options: { data: Partial<User> }): Promise<ApiResponse> {
  const res = await UserRepository.create({
    firstName: options.data?.firstName,
    lastName: options.data?.lastName,
  })

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
