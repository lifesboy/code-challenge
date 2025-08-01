import {ApiResponse} from '../../entities/apiResponse'
import {SuccessResponse} from '../../entities/successResponse'
import {ErrorResponse} from '../../entities/errorResponse'
import * as MESSAGES from '../../../domain/messages'
import * as CODES from '../../../domain/codes'
import * as STATUSES from '../../../domain/statuses'
import * as UserCreateDomainService from '../../../domain/services/user/create'
import {validateCreateUserReq} from '../../validations/user/create'
import {CreateUserReq} from '../../entities/user/create/createUserReq'
import {CreateUserRes} from '../../entities/user/create/createUserRes'


export async function createUser(options: CreateUserReq): Promise<ApiResponse<CreateUserRes>> {
  const createUserReq = await validateCreateUserReq(options)
  const createUserRes: CreateUserRes = await UserCreateDomainService.createUser(createUserReq.data)

  return !!createUserRes
    ? {
      status: STATUSES.SUCCESS.CREATED,
      code: CODES.SUCCESS.CREATED,
      data: createUserRes as CreateUserRes,
    } as SuccessResponse<CreateUserRes>
    : {
      status: STATUSES.ERROR.SERVER_ERROR,
      code: CODES.ERROR.SERVER_ERROR,
      message: MESSAGES.ERROR.CREATE_FAIL,
    } as ErrorResponse<CreateUserRes>
}
